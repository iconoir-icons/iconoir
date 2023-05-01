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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M5 20H2V8L8 5L14 8V20H11M5 20V13H11V20M5 20H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 14V17V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 17H18H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 14H18H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>