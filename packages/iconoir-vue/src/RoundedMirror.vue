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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M20 10V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.5 4.5L13 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 7L11.5 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>