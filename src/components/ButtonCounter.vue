<template>
  <div>
    <h4 @click="count++">
      counter {{ count }} But From Props we get {{ fromProps }}
    </h4>
    <h4 @click="emit('enlarge-text')">Click here to enlarge</h4>
    <h4 @click="emit('short-text')">Click here to Short</h4>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  fromProps: Number,
  isValid: Boolean,
});
const emit = defineEmits(["enlarge-text", "short-text"]);
const count = ref(0);

onMounted(() => {
  console.log(props);
});
</script>

<style lang="scss" scoped></style>
