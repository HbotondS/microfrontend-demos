<script setup lang="ts">
  import { ref } from 'vue'

  const count = ref(0)

  const increment = () => {
    count.value++
  }
</script>

<template>
  <div class="w-fit border-2 border-red-500 border-dashed rounded-lg p-2">
    <div>count = {{ count }}</div>
    <button class="rounded-full bg-green-500 text-white p-2" @click="increment()">add one</button>
  </div>
</template>

