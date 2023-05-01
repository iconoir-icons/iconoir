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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M3 7V12M3 17L3 12M3 12H10M10 12L10 7M10 12L10 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 12V7C17 7 21 7 21 12C21 17 17 17 13 17V12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>