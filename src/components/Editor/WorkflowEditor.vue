<script>
import SpeedDial from './UI/SpeedDial.vue';
import HintOverlay from './UI/HintOverlay.vue';
import EditorMenubar from './UI/EditorMenubar.vue';

import { Editor } from '@baklavajs/core';
import { ViewPlugin } from '@baklavajs/plugin-renderer-vue3';
import { OptionPlugin } from '@baklavajs/plugin-options-vue3';
import { Engine } from '@baklavajs/plugin-engine';

import { InputNode } from '../../nodes/InputNode';

import { autoimportNodes } from './logic/NodeAutoimport';
import SidebarDescriptionOption from '~/components/Editor/Custom/SidebarDescriptionOption.vue';
import {ipcRenderer} from "electron";

// TODO: still uses options API as baklavajs v1.x is buggy with the composition API. Should be migrated when baklavajs v2.x is stable
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { HintOverlay, EditorMenubar, SpeedDial },
  data() {
    return {
      editor: new Editor(),
      viewPlugin: new ViewPlugin(),
      engine: new Engine(false),
      tour: null,
    };
  },
  created() {
    // Register the plugins
    // The view plugin is used for rendering the nodes
    this.editor.use(this.viewPlugin);
    // The option plugin provides some default option UI elements
    this.editor.use(new OptionPlugin());
    // The engine plugin calculates the nodes in the graph in the
    // correct order using the "calculate" methods of the nodes
    // this.editor.use(this.engine);

    // Show a minimap in the top right corner
    this.viewPlugin.enableMinimap = true;

    // register the nodes we have defined, so they can be
    // added by the user as well as saved & loaded.
    this.editor.registerNodeType('Input', InputNode);

    this.viewPlugin.registerOption(
      'SidebarDescriptionOption',
      SidebarDescriptionOption
    );

    // NODES
    autoimportNodes(this.editor);

    // add some nodes so the screen is not empty on startup
    this.addNodeWithCoordinates(InputNode, 100, 350);

    this.engine.calculate();
  },
  methods: {
    addNodeWithCoordinates(nodeType, x, y) {
      const n = new nodeType();
      this.editor.addNode(n);
      n.position.x = x;
      n.position.y = y;
      return n;
    },
    upload(state) {
      // TODO: Implement loading from files
      // this.editor.load(state);
    },
    async download() {
      // TODO: Implement saving current editor state to file correctly
      ipcRenderer.send("save-file", JSON.stringify(this.editor.save()))
      this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Downloaded to Desktop', life: 1500 });
    },
    clear() {
      // TODO: Find out why one can't just iterate once to remove all nodes
      try {
        while (this.editor.nodes.length > 0) {
          for (const node of this.editor.nodes) {
            this.editor.removeNode(node);
          }
        }
      } catch (error) {
        console.log('Something went wrong');
      }
    },
  },
};
</script>

<template>
  <HintOverlay />
  <SpeedDial @upload="upload" @download="download" @clear="clear" />
  <baklava-editor id="editor" :plugin="viewPlugin" />
</template>

<style scoped></style>
