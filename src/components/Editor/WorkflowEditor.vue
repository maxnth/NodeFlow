<script setup>
import { EditorComponent, useBaklava } from "@baklavajs/renderer-vue";
import "@baklavajs/themes/dist/syrup-dark.css";

import InputNode from "~/nodes/InputNode";
import {constructNodesFromFile} from "~/utils/NodeFactory";

const baklava = useBaklava();
baklava.editor.registerNodeType(InputNode)

Promise.resolve(constructNodesFromFile()).then(nodes => {
  for(const node of nodes){
    baklava.editor.registerNodeType(node.node, {category: node.category})
  }
})
</script>

<template>
  <EditorComponent id="editor" :view-model="baklava" />
</template>

<style scoped></style>
