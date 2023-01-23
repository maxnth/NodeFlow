<script setup>
import WorkflowEditor from '../Editor/WorkflowEditor.vue';

import { onMounted } from 'vue';
// @ts-ignore
import { useShepherd } from 'vue-shepherd';

const tour = useShepherd({
  useModalOverlay: true,
});

onMounted(() => {
  tour.addStep({
    title: 'Welcome to the NodeFlow tour',
    text: `This tour will give you a brief overview of all the basic functionalities of the Workflow editor.`,
    attachTo: {
      element: '#editor',
      on: 'top',
    },
    buttons: [
      {
        action() {
          return this.cancel();
        },
        classes: 'shepherd-button-secondary',
        text: 'Cancel',
      },
      {
        action() {
          return this.next();
        },
        text: 'Next',
      },
    ],
    id: 'creating',
  });
  tour.addStep({
    title: 'Node',
    text: "Every node represents a step in the OCR workflow that you're building.",
    attachTo: {
      element: '.node',
      on: 'top',
    },
    buttons: [
      {
        action() {
          return this.back();
        },
        classes: 'shepherd-button-secondary',
        text: 'Back',
      },
      {
        action() {
          return this.next();
        },
        text: 'Next',
      },
    ],
    id: 'node-introduction',
  });
  tour.addStep({
    title: 'Input Node',
    text: "This node is something special.\nThe 'Input' node is the initial node of every OCR workflow and represents the original input images.\nUnlike most other nodes it doesn't have any options.",
    attachTo: {
      element: '.node',
      on: 'top',
    },
    buttons: [
      {
        action() {
          return this.back();
        },
        classes: 'shepherd-button-secondary',
        text: 'Back',
      },
      {
        action() {
          return this.next();
        },
        text: 'Next',
      },
    ],
    id: 'input-node',
  });
  // TODO: Finish tour
  tour.start();
});
</script>

<template>
  <WorkflowEditor />
</template>
