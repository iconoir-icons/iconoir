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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.5 5.5L17.5 16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.5 5.5L6.5 16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.5 14H6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.5 14H16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>