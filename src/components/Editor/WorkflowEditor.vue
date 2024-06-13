<script setup>
import { EditorComponent, useBaklava  } from "baklavajs";

import InputNode from "~/nodes/InputNode";
import {constructNodesFromFile} from "~/components/Editor/logic/NodeFactory";
import {useEditorStore} from "~/stores/editor.store";
import {addNodeWithCoordinates} from "~/utils/nodeEditor";

import CToolbar from "~/components/Editor/Custom/Toolbar.vue"
import CNode from "~/components/Editor/Custom/Node.vue";
import CPalette from "~/components/Editor/Custom/Palette.vue"
import {ipcRenderer} from "electron";

import { useToast } from 'primevue/usetoast';
import {exportWorkflow} from "~/components/Editor/logic/WorkflowExporter";

const toast = useToast();

const editorStore = useEditorStore()
const saveResults = ref('')

const baklava = useBaklava();
const editor = baklava.editor
const palette = ref()

const { files, open, reset, onChange } = useFileDialog({multiple: false, accept: '*.json'})

onChange(async (files) => {
  if (files?.length > 0) {
    const file = files?.item(0).path
    await ipcRenderer.invoke("load-workflow-from-file", file).then((result) => {
      editor.load(JSON.parse(result))
      toast.add({ severity: 'success', summary: 'Success', detail: 'Workflow loaded', life: 3000 });
      reset()
    })
  }
})

editor.registerNodeType(InputNode)

Promise.resolve(constructNodesFromFile()).then(nodes => {
  for(const node of nodes){
    editor.registerNodeType(node.node, {category: node.category})
  }

  if(editorStore.stack !== undefined && Object.keys(editorStore.stack).length){
    baklava.editor.load(JSON.parse(editorStore.stack))
    editorStore.stack = {}
  }else{
    addNodeWithCoordinates(baklava, InputNode, 50, 350);
  }
})

function uploadState() {
  open()
}

function downloadState() {
  saveResults.value = JSON.stringify(editor.save())
  ipcRenderer.send("save-file", saveResults.value)
}

function exportState() {
  const stateExport = exportWorkflow(editor.save(), "external")
  ipcRenderer.send("save-file", stateExport)
}

function togglePalette() {
  palette.value.toggleVisibility();
}
</script>

<template>
  <Toast />
  <EditorComponent id="editor" :view-model="baklava">
    <template #toolbar>
      <CToolbar
        @upload="uploadState"
        @download="downloadState"
        @export="exportState"
        @toggle-palette="togglePalette" />
    </template>
    <template #palette>
      <CPalette ref="palette" />
    </template>
    <template #node="nodeProps">
      <CNode :key="nodeProps.node.id" v-bind="nodeProps" />
    </template>
  </EditorComponent>
</template>


<style>
@import "/assets/nodeflow-custom.css";
</style>
