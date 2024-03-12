<script setup lang="ts">
  import { storeToRefs } from "pinia"
  import { useStore } from "../stores/counter"

  const store = useStore()
  const { count } = storeToRefs(store)
</script>

<template>
  <div class="w-fit border-2 border-red-500 border-dashed rounded-lg p-2">
    <div>count = {{ count }}</div>
    <button class="rounded-full bg-green-500 text-white p-2" @click="store.increment">add one</button>
  </div>
</template>

