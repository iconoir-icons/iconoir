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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M4 3C4 8.625 12 12 12 12C12 12 20 15.375 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 3C20 8.625 12 12 12 12C12 12 4 15.375 4 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 6L19 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 18H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 9H16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 15H16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>