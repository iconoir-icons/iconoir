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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M14 14L2 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 10H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 6H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 18H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 14V4M19 4L22 7M19 4L16 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>