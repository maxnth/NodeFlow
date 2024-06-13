<script setup lang="ts">
import { ref, computed, toRef, nextTick, onUpdated, onMounted } from "vue";
import {
  AbstractNode,
  GRAPH_NODE_TYPE_PREFIX,
  IGraphNode,
} from "@baklavajs/core";
import { useDragMove, useGraph, useViewModel } from "baklavajs";
import { Components } from "baklavajs";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

const ContextMenu = Components.ContextMenu;
import {
  EllipsisVerticalIcon,
  ChevronRightIcon,
} from "@heroicons/vue/24/outline";
import CNodeInterface from "~/components/Editor/Custom/NodeInterface.vue";

const props = withDefaults(
  defineProps<{
    node: AbstractNode;
    selected?: boolean;
  }>(),
  { selected: false }
);

const emit = defineEmits<{
  (e: "select"): void;
}>();

const { viewModel } = useViewModel();
const { graph, switchGraph } = useGraph();
const dragMove = useDragMove(toRef(props.node, "position"));

const el = ref<HTMLElement | null>(null);
const renaming = ref(false);
const tempName = ref("");
const renameInputEl = ref<HTMLInputElement | null>(null);

const showContextMenu = ref(false);
const contextMenuItems = computed(() => {
  const items = [
    { value: "rename", label: "Rename" },
    { value: "delete", label: "Delete" },
  ];

  if (props.node.type.startsWith(GRAPH_NODE_TYPE_PREFIX)) {
    items.push({ value: "editSubgraph", label: "Edit Subgraph" });
  }

  return items;
});

const classes = computed(() => ({
  "--selected": props.selected,
  "--dragging": dragMove.dragging.value,
  "--two-column": !!props.node["twoColumn"],
}));

const styles = computed(() => ({
  top: `${props.node["position"]?.y ?? 0}px`,
  left: `${props.node["position"]?.x ?? 0}px`,
  width: `${props.node["width"] ?? 200}px`,
}));

const inputs = computed(() =>
  Object.values(props.node.inputs).filter(
    (ni) => !ni.hidden && ni.name === "Input"
  )
);
const displayedParameters = computed(() =>
  Object.values(props.node.inputs).filter(
    (ni) => !ni.hidden && ni.name !== "Input"
  )
);
const displayedOutputs = computed(() =>
  Object.values(props.node.outputs).filter((ni) => !ni.hidden)
);

const select = () => {
  emit("select");
};

const startDrag = (ev: PointerEvent) => {
  dragMove.onPointerDown(ev);
  document.addEventListener("pointermove", dragMove.onPointerMove);
  document.addEventListener("pointerup", stopDrag);
  select();
};

const stopDrag = () => {
  dragMove.onPointerUp();
  document.removeEventListener("pointermove", dragMove.onPointerMove);
  document.removeEventListener("pointerup", stopDrag);
};

const openContextMenu = () => {
  showContextMenu.value = true;
};

const onContextMenuClick = async (action: string) => {
  switch (action) {
    case "delete":
      if(props.node.title !== "Input") graph.value.removeNode(props.node);
      break;
    case "rename":
      tempName.value = props.node.title;
      renaming.value = true;
      await nextTick();
      renameInputEl.value?.focus();
      break;
    case "editSubgraph":
      switchGraph((props.node as AbstractNode & IGraphNode).template);
      break;
  }
};

const doneRenaming = () => {
  // eslint-disable-next-line vue/no-mutating-props
  props.node.title = tempName.value;
  renaming.value = false;
};

const onRender = () => {
  if (el.value) {
    viewModel.value.hooks.renderNode.execute({
      node: props.node,
      el: el.value,
    });
  }
};

onMounted(onRender);
onUpdated(onRender);
</script>
<template>
  <div
    :id="node.id"
    ref="el"
    class="baklava-node"
    :class="classes"
    :style="styles"
    :data-node-type="node.type"
    @pointerdown="select"
  >
    <div class="__title" @pointerdown.self.stop="startDrag">
      <template v-if="!renaming">
        <div class="__title-label">
          {{ node.title }}
        </div>
        <div v-show="node.title !== 'Input'" class="__menu">
          <EllipsisVerticalIcon
            class="h-6 w-6 hover:cursor-pointer"
            @click="openContextMenu"
          />
          <context-menu
            v-model="showContextMenu"
            :x="0"
            :y="0"
            :items="contextMenuItems"
            @click="onContextMenuClick"
          />
        </div>
      </template>
      <input
        v-else
        ref="renameInputEl"
        v-model="tempName"
        type="text"
        class="baklava-input"
        placeholder="Node Name"
        @blur="doneRenaming"
        @keydown.enter="doneRenaming"
      />
    </div>

    <div class="__content">
      <!-- Outputs -->
      <div class="__outputs">
        <CNodeInterface
          v-for="output in displayedOutputs"
          :key="output.id"
          :node="node"
          :intf="output"
        />
      </div>

      <!-- Inputs -->
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg px-10 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-opacity-75"
        >
          <div class="flex justify-center space-x-2 pb-2">
            <ChevronRightIcon
              :class="open ? 'rotate-90 transform' : ''"
              class="h-5 w-5 text-center text-gray-800 dark:text-gray-200"
            />
            <span>{{ $t("nodeflow.node.settings") }}</span>
          </div>
        </DisclosureButton>
        <DisclosurePanel class="px-4 pb-2 pt-4 text-sm">
          <div class="__inputs">
            <CNodeInterface
              v-for="input in displayedParameters"
              :key="input.id"
              :node="node"
              :intf="input"
            />
          </div>
        </DisclosurePanel>
      </Disclosure>
      <CNodeInterface
        v-for="input in inputs"
        :key="input.id"
        :node="node"
        :intf="input"
      />
    </div>
  </div>
</template>
