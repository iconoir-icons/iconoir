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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M9.5 12V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.75 12L4.8125 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.625 20H9.5V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.875 20H2L2.9375 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.625 8L9.5 4V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.5 20H22L14.5 4V20Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>