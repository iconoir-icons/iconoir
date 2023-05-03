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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M3 6H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 12L17 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 18L13 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>