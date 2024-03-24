<template>
  <div>
    <h2>Hello from child. received props {{ reactiveWatch }}</h2>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
defineProps({
    reactiveWatch: Number
})

const childVar = ref(0);

watch(childVar, (childVar) => {
    console.log('from child', childVar);
})
</script>

<style lang="scss" scoped></style>
