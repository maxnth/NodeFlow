"use strict";
const electron = require("electron");
const node_os = require("node:os");
const node_path = require("node:path");
const path = require("path");
const Docker = require("dockerode");
const { exec } = require("child_process");
const fs = require("fs");
process.env.DIST_ELECTRON = node_path.join(__dirname, "..");
process.env.DIST = node_path.join(process.env.DIST_ELECTRON, "../dist");
process.env.PUBLIC = process.env.VITE_DEV_SERVER_URL ? node_path.join(process.env.DIST_ELECTRON, "../public") : process.env.DIST;
if (node_os.release().startsWith("6.1"))
  electron.app.disableHardwareAcceleration();
if (process.platform === "win32")
  electron.app.setAppUserModelId(electron.app.getName());
if (!electron.app.requestSingleInstanceLock()) {
  electron.app.quit();
  process.exit(0);
}
let win = null;
const preload = node_path.join(__dirname, "../preload/index.js");
const url = process.env.VITE_DEV_SERVER_URL;
const indexHtml = node_path.join(process.env.DIST, "index.html");
async function createWindow() {
  win = new electron.BrowserWindow({
    title: "NodeFlow",
    icon: node_path.join(process.env.PUBLIC, "favicon.ico"),
    width: 1200,
    height: 750,
    webPreferences: {
      preload,
      // Warning: Enable nodeIntegration and disable contextIsolation is not secure in production
      // Consider using contextBridge.exposeInMainWorld
      // Read more on https://www.electronjs.org/docs/latest/tutorial/context-isolation
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  win.setMenu(null);
  win.setOpacity(1);
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(url);
    win.webContents.openDevTools();
  } else {
    win.loadFile(indexHtml);
  }
  win.webContents.on("did-finish-load", () => {
    win == null ? void 0 : win.webContents.send("main-process-message", (/* @__PURE__ */ new Date()).toLocaleString());
  });
  win.webContents.setWindowOpenHandler(({ url: url2 }) => {
    if (url2.startsWith("https:"))
      electron.shell.openExternal(url2);
    return { action: "deny" };
  });
}
electron.app.whenReady().then(createWindow);
electron.app.on("window-all-closed", () => {
  win = null;
  if (process.platform !== "darwin")
    electron.app.quit();
});
electron.app.on("second-instance", () => {
  if (win) {
    if (win.isMinimized())
      win.restore();
    win.focus();
  }
});
electron.app.on("activate", () => {
  const allWindows = electron.BrowserWindow.getAllWindows();
  if (allWindows.length) {
    allWindows[0].focus();
  } else {
    createWindow();
  }
});
async function saveFile(data) {
  const { canceled, filePath } = await electron.dialog.showSaveDialog(electron.BrowserWindow.getFocusedWindow(), {
    properties: ["createDirectory"]
  });
  if (canceled) {
    return new Promise((resolve, reject) => {
      resolve(false);
    });
  } else {
    return new Promise((resolve, reject) => {
      fs.writeFileSync(filePath, data);
      resolve(true);
    });
  }
}
electron.ipcMain.on("save-file", async (event, data) => {
  return await saveFile(data);
});
async function exportResults(resultPath) {
  const { canceled, filePath } = await electron.dialog.showSaveDialog(electron.BrowserWindow.getFocusedWindow(), {
    properties: ["createDirectory"]
  });
  if (canceled) {
    return new Promise((resolve, reject) => {
      resolve(false);
    });
  } else {
    return new Promise((resolve, reject) => {
      fs.writeFileSync(filePath, resultPath);
      resolve(true);
    });
  }
}
electron.ipcMain.on("export-results", async (event, resultPath) => {
  return await exportResults(resultPath);
});
function loadWorkflowFromFile(path2) {
  return new Promise((resolve, reject) => {
    fs.readFile(path2, "utf8", (err, content) => {
      if (err) {
        return;
      }
      resolve(content);
    });
  });
}
electron.ipcMain.handle("load-workflow-from-file", async (event, path2) => {
  return await loadWorkflowFromFile(path2);
});
function isDockerAvailable() {
  return new Promise((resolve, reject) => {
    const docker = new Docker();
    docker.listContainers(function(err, containers) {
      resolve(!err);
    });
  });
}
electron.ipcMain.handle("is-docker-available", async (event, ...args) => {
  return await isDockerAvailable();
});
function pullOcrdDockerImage() {
  return new Promise((resolve, reject) => {
    const docker = new Docker();
    docker.pull("ocrd/all:maximum", function(err, stream) {
      docker.modem.followProgress(stream, onFinished, onProgress);
      function onFinished(err2, output) {
        if (!err2) {
          resolve(true);
        }
      }
      function onProgress(event) {
        if (event.progressDetail !== void 0) {
          const detail = event.progressDetail;
          if (detail.current !== void 0 && detail.total !== void 0) {
            const percentage = Math.round(detail.total / detail.current);
            console.log(percentage);
          }
        }
      }
    });
  });
}
electron.ipcMain.handle("pull-ocrd-docker-image", async (event, args) => {
  return await pullOcrdDockerImage();
});
electron.ipcMain.on("open-docker-setup-guide", (event, ...args) => {
  require("electron").shell.openExternal("https://docs.docker.com/get-docker/");
});
async function getDirectory() {
  const { canceled, filePaths } = await electron.dialog.showOpenDialog(electron.BrowserWindow.getFocusedWindow(), {
    properties: ["openDirectory"]
  });
  if (canceled) {
    return;
  } else {
    return new Promise((resolve, reject) => {
      resolve(filePaths[0]);
    });
  }
}
electron.ipcMain.handle("get-directory", async (event, args) => {
  return await getDirectory();
});
function initOcrdWorkspace(_path) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(_path);
    fs.mkdirSync(path.join(_path, "OCR-D-IMG"));
    const command = `docker run --rm -v ${_path}:/data -w /data -- ocrd/all:maximum ocrd workspace -d /data init`;
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        resolve(false);
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        if (!stderr.includes("Writing METS to /data/mets.xml"))
          resolve(false);
      }
      console.log(`stdout: ${stdout}`);
      resolve(true);
    });
  });
}
electron.ipcMain.handle("init-ocrd-workspace", async (event, timestamp) => {
  return await initOcrdWorkspace(path.join(electron.app.getAppPath(), timestamp));
});
function uploadImagesToWorkspace(paths, workspaceName) {
  return new Promise((resolve, reject) => {
    const workspacePath = path.join(electron.app.getAppPath(), workspaceName);
    const imgPath = path.join(workspacePath, "OCR-D-IMG");
    for (const _path of paths) {
      const baseName = path.parse(_path).base;
      const fileName = path.parse(_path).name;
      const target = path.join(imgPath, baseName);
      fs.copyFileSync(_path, target);
      const command = `docker run --rm -u $(id -u) -v ${workspacePath}:/data -w /data -- ocrd/all:maximum ocrd workspace add -G OCR-D-IMG -i OCR-D-IMG_${fileName} -g P_${fileName} -m image/tif OCR-D-IMG/${baseName}`;
      require("child_process").execSync(command);
    }
    resolve(true);
  });
}
electron.ipcMain.handle("upload-images-to-workspace", async (event, data) => {
  return await uploadImagesToWorkspace(data.paths, data.workspaceName);
});
electron.ipcMain.handle("open-win", (_, arg) => {
  const childWindow = new electron.BrowserWindow({
    webPreferences: {
      preload,
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  if (process.env.VITE_DEV_SERVER_URL) {
    childWindow.loadURL(`${url}#${arg}`);
  } else {
    childWindow.loadFile(indexHtml, { hash: arg });
  }
});
//# sourceMappingURL=index.js.map
