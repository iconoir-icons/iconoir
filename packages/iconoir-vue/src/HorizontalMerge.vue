<script lang="ts">
import { defineComponent, inject } from "vue-demi";
import type { SVGAttributes } from "vue-demi";
import providerKey from "./providerKey";
export default defineComponent<SVGAttributes>(() => {
  const context = inject(providerKey);
  return { context };
});
</script>
<template>
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M22 12H14M14 12L17.5 8.5M14 12L17.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 12H10M10 12L6.5 8.5M10 12L6.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 21L10 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 21L14 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>