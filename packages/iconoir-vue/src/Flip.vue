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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M9.5 20H2L9.5 4V20Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.125 20H22L21.0625 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.375 20H14.5V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.5 12V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.25 12L19.1875 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.375 8L14.5 4V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>