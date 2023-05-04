import { app, dialog, BrowserWindow, shell, ipcMain } from 'electron';
import { release } from 'node:os';
import { join } from 'node:path';

const Docker = require('dockerode')
const { exec } = require('child_process');
const fs = require("fs");

// The built directory structure
//
// ├─┬ dist-electron
// │ ├─┬ main
// │ │ └── index.js    > Electron-Main
// │ └─┬ preload
// │   └── index.js    > Preload-Scripts
// ├─┬ dist
// │ └── index.html    > Electron-Renderer
//
process.env.DIST_ELECTRON = join(__dirname, '..');
process.env.DIST = join(process.env.DIST_ELECTRON, '../dist');
process.env.PUBLIC = process.env.VITE_DEV_SERVER_URL
  ? join(process.env.DIST_ELECTRON, '../public')
  : process.env.DIST;

// Disable GPU Acceleration for Windows 7
if (release().startsWith('6.1')) app.disableHardwareAcceleration();

// Set application name for Windows 10+ notifications
if (process.platform === 'win32') app.setAppUserModelId(app.getName());

if (!app.requestSingleInstanceLock()) {
  app.quit();
  process.exit(0);
}

// Remove electron security warnings
// This warning only shows in development mode
// Read more on https://www.electronjs.org/docs/latest/tutorial/security
// process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

let win: BrowserWindow | null = null;
// Here, you can also use other preload
const preload = join(__dirname, '../preload/index.js');
const url = process.env.VITE_DEV_SERVER_URL;
const indexHtml = join(process.env.DIST, 'index.html');

async function createWindow() {
  win = new BrowserWindow({
    title: 'NodeFlow',
    icon: join(process.env.PUBLIC, 'favicon.ico'),
    width: 1200,
    height: 750,
    webPreferences: {
      preload,
      // Warning: Enable nodeIntegration and disable contextIsolation is not secure in production
      // Consider using contextBridge.exposeInMainWorld
      // Read more on https://www.electronjs.org/docs/latest/tutorial/context-isolation
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.setMenu(null);

  win.setOpacity(1);

  if (process.env.VITE_DEV_SERVER_URL) {
    // electron-vite-vue#298
    win.loadURL(url);
    // Open devTool if the app is not packaged
    win.webContents.openDevTools();
  } else {
    win.loadFile(indexHtml);
  }

  // Test actively push message to the Electron-Renderer
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', new Date().toLocaleString());
  });

  // Make all links open with the browser, not with the application
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https:')) shell.openExternal(url);
    return { action: 'deny' };
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  win = null;
  if (process.platform !== 'darwin') app.quit();
});

app.on('second-instance', () => {
  if (win) {
    // Focus on the main window if the user tried to open another
    if (win.isMinimized()) win.restore();
    win.focus();
  }
});

app.on('activate', () => {
  const allWindows = BrowserWindow.getAllWindows();
  if (allWindows.length) {
    allWindows[0].focus();
  } else {
    createWindow();
  }
});

async function saveFile(data){
  const { canceled, filePath } = await dialog.showSaveDialog(BrowserWindow.getFocusedWindow(), {
    properties: ['createDirectory']
  })
  if (canceled) {
    return new Promise((resolve, reject) => {
      resolve(false)
    })
  } else {
    return new Promise((resolve, reject) => {
      fs.writeFileSync(filePath, data)
      resolve(true)
    })
  }
}

ipcMain.on('save-file', async (event, data) => {
  return await saveFile(data)
});


function loadWorkflowFromFile(path: string){
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, content) => {
      if (err) {
        return;
      }
      resolve(content)
    })
  })
}
ipcMain.handle('load-workflow-from-file', async (event, path: string) => {
  return await loadWorkflowFromFile(path)
})

function isDockerAvailable () {
  return new Promise((resolve, reject) => {
    const docker = new Docker()
    docker.listContainers(function (err, containers) {
      resolve(!err)
    });
  })
}
ipcMain.handle('is-docker-available', async (event, ...args) => {
  return await isDockerAvailable()
})

function pullOcrdDockerImage() {
  return new Promise((resolve, reject) => {
    const docker = new Docker()
    docker.pull('ocrd/all:maximum', function (err, stream) {
      docker.modem.followProgress(stream, onFinished, onProgress)
      function onFinished(err, output) {
        if(!err){
          resolve(true)
        }
      }
      function onProgress(event) {
        console.log(event)
      }
    });
  })
}

ipcMain.handle("pull-ocrd-docker-image", async (event, args) => {
  return await pullOcrdDockerImage()
})

ipcMain.on('open-docker-setup-guide', (event, ...args) => {
  require('electron').shell.openExternal("https://docs.docker.com/get-docker/");
})

async function getDirectory() {
  const { canceled, filePaths } = await dialog.showOpenDialog(BrowserWindow.getFocusedWindow(), {
    properties: ['openDirectory']
  })
  if (canceled) {
    return
  } else {
    return new Promise((resolve, reject) => {
      resolve(filePaths[0])
    })
  }
}

ipcMain.handle("get-directory", async (event, args) => {
  return await getDirectory()
})

function initOcrdWorkspace(path: string) {
  const command = `docker run --rm -v ${path}:/data -w /data -- ocrd/all:maximum ocrd workspace -d /data init`
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        resolve(false)
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        if(!stderr.includes("Writing METS to /data/mets.xml")) resolve(false)
      }
      console.log(`stdout: ${stdout}`);
      resolve(true)
    });
  })
}

ipcMain.handle("init-ocrd-workspace", async (event, path: string) => {
  return await initOcrdWorkspace(path)
})

// New window example arg: new windows url
ipcMain.handle('open-win', (_, arg) => {
  const childWindow = new BrowserWindow({
    webPreferences: {
      preload,
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  if (process.env.VITE_DEV_SERVER_URL) {
    childWindow.loadURL(`${url}#${arg}`);
  } else {
    childWindow.loadFile(indexHtml, { hash: arg });
  }
});
