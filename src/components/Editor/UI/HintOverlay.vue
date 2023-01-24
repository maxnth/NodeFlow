<script setup>
import { ArrowSmallRightIcon, ArrowSmallLeftIcon } from "@heroicons/vue/24/outline";

const tip_index = ref(0)

const tips = [
  "Right-click on empty space to add new nodes",
  "Drag a connection from the end interface to empty space to remove it",
  "Click on 'Description' to get more information about the processor",
  "Right click on a node's header to delete it",
  "Click on the speed dial in the bottom right corner for additional options"
]

function increase_index(){
  if(tip_index.value+1 < tips.length){
    tip_index.value += 1
  }else{
    tip_index.value = 0
  }
}

function decrease_index(){
  if(tip_index.value-1 > 0){
    tip_index.value -= 1
  }else{
    tip_index.value = tips.length-1
  }
}
</script>

<template>
  <div class="hint">
    <div class="flex justify-between pb-2">
      <ArrowSmallLeftIcon @click="decrease_index" class="h-6 h-6 text clickable" />
      <b>Tip</b>
      <ArrowSmallRightIcon @click="increase_index" class="h-6 h-6 clickable" />
    </div>
    <p class="break-words">
      {{ tips[tip_index] }}
    </p>
  </div>
</template>

<style>
.hint {
  position: absolute;
  top: 1rem;
  left: 15rem;
  z-index: 5;
  padding: 1rem;
  width: 25%;
  background: #0003;
  color: white;
  pointer-events: none;
}
.clickable {
  pointer-events: all !important;
}
</style>
