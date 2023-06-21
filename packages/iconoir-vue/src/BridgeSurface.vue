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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M3 12C3 16 5 21 11 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 6C10 10 12 15 18 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 8.5L3 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 3L10 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 12L10 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 21L18 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.5 21H16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 15H23" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>