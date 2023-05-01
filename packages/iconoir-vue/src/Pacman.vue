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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M16 12L16.0111 12.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 12L19.0111 12.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 12L22.0111 12.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 12C2 17.5228 6.47715 22 12 22C15.2712 22 18.1755 20.4293 20 18.001L12 12L20 5.99902C18.1755 3.57069 15.2712 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>