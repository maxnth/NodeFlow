<script setup lang="ts">
import { computed, CSSProperties, inject, Ref, ref, reactive } from "vue";
import { usePointer } from "@vueuse/core";
import { AbstractNode, INodeTypeInformation } from "baklavajs";
import PaletteEntry from "./PaletteEntry.vue";
import { useViewModel, useTransform } from "baklavajs";

import Tree from "primevue/tree";

type NodeTypeInformations = Record<string, INodeTypeInformation>;

const visible = ref(true);

function toggleVisibility() {
  visible.value = !visible.value;
}

defineExpose({
  toggleVisibility,
});

interface IDraggedNode {
  type: string;
  nodeInformation: INodeTypeInformation;
}
const { viewModel } = useViewModel();
const { x: mouseX, y: mouseY } = usePointer();
const { transform } = useTransform();

const editorEl = inject<Ref<HTMLElement | null>>("editorEl");

const draggedNode = ref<IDraggedNode | null>(null);

const categories = computed<
  Array<{ name: string; nodeTypes: NodeTypeInformations }>
>(() => {
  const nodeTypeEntries: any[] = []
  const categoryNames: Set<string> = new Set()
  for(const [key, value] of viewModel.value.editor.nodeTypes.entries()){
    nodeTypeEntries.push({
      key: key,
      label: value.title,
      category: value.category,
      type: "node",
      nt: value.type,
      ni: value,
    })
    categoryNames.add(value.category)
  }

  const categories: Array<{ name: string; nodeTypes: NodeTypeInformations }> =
    [];
  for (const category of categoryNames.values()) {
    const nodeTypesInCategory = []
    if (category !== "Subgraphs") {
      for(const node of nodeTypeEntries){
        if(node.category === category){
          nodeTypesInCategory.push(
            node
          )
        }
      }

      if (nodeTypesInCategory.length > 0) {
        if (category !== "default") {
          categories.push({
            key: category,
            label: category,
            children: nodeTypesInCategory
          })
        }
      }
    }
    // Hardcode sort order of categories, this should be handled differently in the future (get sort order from backend?)
    const sortOrder = ["Preprocessing", "Layout Analysis", "Text Recognition"];
    categories.sort((x, y) => {
      return sortOrder.indexOf(x as string) - sortOrder.indexOf(y as string);
    });

    //// Disabled as the sort order currently has to be hard coded to follow the most sensible flow of an OCR workflow
    //// Order might have to be moved to the backend
    // sort, so the default category is always first and all others are sorted alphabetically
    // categories.sort((a, b) => {
    //   if (a.name === "default") {
    //     return -1;
    //   } else if (b.name === "default") {
    //     return 1;
    //   } else {
    //     return a.name > b.name ? 1 : -1;
    //   }
    // });
  }
  return categories;
});

const draggedNodeStyles = computed<CSSProperties>(() => {
  if (!draggedNode.value || !editorEl?.value) {
    return {};
  }
  if ("getBoundingClientRect" in editorEl.value) {
    const { left, top } = editorEl.value.getBoundingClientRect();

    return {
      top: `${mouseY.value - top}px`,
      left: `${mouseX.value - left}px`,
    };
  }
});

const onDragStart = (type: string, nodeInformation: INodeTypeInformation) => {
  draggedNode.value = {
    type,
    nodeInformation,
  };

  const onDragEnd = () => {
    const instance = reactive(new nodeInformation.type()) as AbstractNode;
    viewModel.value.displayedGraph.addNode(instance);

    const rect = editorEl?.value?.getBoundingClientRect();
    const [x, y] = transform(mouseX.value - rect.left, mouseY.value - rect.top);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    instance.position.x = x;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    instance.position.y = y;

    console.log(x, y)

    draggedNode.value = null;
    document.removeEventListener("pointerup", onDragEnd);
  };
  document.addEventListener("pointerup", onDragEnd);
};

import { useMouseInElement } from '@vueuse/core'
const palette = ref()

const { x, y, isOutside } = useMouseInElement(palette)
</script>

<template>
  <transition
    enter-active-class="transform transition ease-in-out duration-200"
    enter-from-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transform transition ease-in-out duration-200  "
    leave-from-class="translate-x-0"
    leave-to-class="translate-x-full"
  >
    <div v-show="visible" ref="palette" class="overflow-scroll-y h-full">
      <div
        class="baklava-node-palette !w-96 !opacity-95 dark:!bg-zinc-800 dark:!opacity-95"
      >
        <h1
          class="pb-5 text-center text-xl text-zinc-100 font-bold text-surface-0"
        >
          {{ $t("nodeflow.palette.processors") }}
        </h1>
        <Tree :value="categories" :filter="true" filterMode="lenient" class="w-full">
          <template #node="slotProps">
            <PaletteEntry
              :key="slotProps.node.key"
              :type="slotProps.node.nt"
              :title="slotProps.node.label"
              @pointerdown="onDragStart(slotProps.node.label, slotProps.node.ni)"
            />
          </template>
        </Tree>
      </div>
      <transition name="fade">
        <div
          v-if="draggedNode"
          class="baklava-dragged-node"
          :style="draggedNodeStyles"
        >
          <PaletteEntry
            :type="draggedNode.type"
            :title="draggedNode.nodeInformation.title"
          />
        </div>
      </transition>
    </div>
  </transition>
</template>
