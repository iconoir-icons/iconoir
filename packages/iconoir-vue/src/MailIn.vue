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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M5 9L9.5 12L14 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 19H3C1.89543 19 1 18.1046 1 17V7C1 5.89543 1.89543 5 3 5H16C17.1046 5 18 5.89543 18 7V9" stroke="currentColor" stroke-linecap="round"></path><path d="M23 14H17M17 14L20 11M17 14L20 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>