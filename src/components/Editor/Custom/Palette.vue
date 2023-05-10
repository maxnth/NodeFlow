<script lang="ts">
import { computed, CSSProperties, defineComponent, inject, Ref, ref, reactive } from "vue";
import { usePointer } from "@vueuse/core";
import { AbstractNode, INodeTypeInformation } from "@baklavajs/core";
import PaletteEntry from "./PaletteEntry.vue";
import { useViewModel, useTransform } from "baklavajs";

type NodeTypeInformations = Record<string, INodeTypeInformation>;

interface IDraggedNode {
  type: string;
  nodeInformation: INodeTypeInformation;
}

export default defineComponent({
  components: { PaletteEntry },
  setup() {
    const { viewModel } = useViewModel();
    const { x: mouseX, y: mouseY } = usePointer();
    const { transform } = useTransform();

    const editorEl = inject<Ref<HTMLElement | null>>("editorEl");

    const draggedNode = ref<IDraggedNode | null>(null);

    const categories = computed<Array<{ name: string; nodeTypes: NodeTypeInformations }>>(() => {
      const nodeTypeEntries = Array.from(viewModel.value.editor.nodeTypes.entries());

      const categoryNames = new Set(nodeTypeEntries.map(([, ni]) => ni.category));

      const categories: Array<{ name: string; nodeTypes: NodeTypeInformations }> = [];
      for (const c of categoryNames.values()) {
        if (c !== "Subgraphs") {
          let nodeTypesInCategory = nodeTypeEntries.filter(([, ni]) => ni.category === c);

          if (nodeTypesInCategory.length > 0) {
            categories.push({
              name: c,
              nodeTypes: Object.fromEntries(nodeTypesInCategory),
            });
          }
        }

        // sort, so the default category is always first and all others are sorted alphabetically
        categories.sort((a, b) => {
          if (a.name === "default") {
            return -1;
          } else if (b.name === "default") {
            return 1;
          } else {
            return a.name > b.name ? 1 : -1;
          }
        });
        }
        return categories;
    });

    const draggedNodeStyles = computed<CSSProperties>(() => {
      if (!draggedNode.value || !editorEl?.value) {
        return {};
      }
      const { left, top } = editorEl.value.getBoundingClientRect();
      return {
        top: `${mouseY.value - top}px`,
        left: `${mouseX.value - left}px`,
      };
    });

    const onDragStart = (type: string, nodeInformation: INodeTypeInformation) => {
      draggedNode.value = {
        type,
        nodeInformation,
      };

      const onDragEnd = () => {
        const instance = reactive(new nodeInformation.type()) as AbstractNode;
        viewModel.value.displayedGraph.addNode(instance);

        const rect = editorEl!.value!.getBoundingClientRect();
        const [x, y] = transform(mouseX.value - rect.left, mouseY.value - rect.top);
        // @ts-ignore
        instance.position.x = x;
        // @ts-ignore
        instance.position.y = y;

        draggedNode.value = null;
        document.removeEventListener("pointerup", onDragEnd);
      };
      document.addEventListener("pointerup", onDragEnd);
    };

    return { draggedNode, categories, draggedNodeStyles, onDragStart, mouseX, mouseY };
  },
});
</script>

<template>
  <div class="baklava-node-palette">
    <h1 class="text-black dark:text-white text-lg mb-2 text-center">Available Processors</h1>
    <Accordion
      :multiple="true">
      <template
        v-for="c in categories"
        :key="c.name">
        <AccordionTab
          :header="c.name"
          :pt="{
            headerAction: { class: '!bg-gray-200 dark:!bg-gray-800' },
            headerIcon: { class: 'text-black dark:text-white' },
            headerTitle: { class: 'text-black dark:text-white' },
            content: { class: 'bg-gray-50 dark:bg-gray-700' }
          }">
          <PaletteEntry
            v-for="(ni, nt) in c.nodeTypes"
            :key="nt"
            :type="nt"
            :title="ni.title"
            @pointerdown="onDragStart(nt, ni)"
          />
        </AccordionTab>
      </template>
    </Accordion>
  </div>
  <transition name="fade">
    <div v-if="draggedNode" class="baklava-dragged-node" :style="draggedNodeStyles">
      <PaletteEntry :type="draggedNode.type" :title="draggedNode.nodeInformation.title" />
    </div>
  </transition>
</template>

<style scoped>
.baklava-node-palette {
  @apply bg-white dark:bg-gray-700 outline-1 outline-black;
  right: 0;
  left: initial;
}
</style>
