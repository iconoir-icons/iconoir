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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M21 3.6V12H12V3H20.4C20.7314 3 21 3.26863 21 3.6Z" stroke="currentColor" stroke-width="1.5"></path><path d="M21 20.4V12H12V21H20.4C20.7314 21 21 20.7314 21 20.4Z" stroke="currentColor" stroke-width="1.5"></path><path d="M3 12V3.6C3 3.26863 3.26863 3 3.6 3H12V12H3Z" stroke="currentColor" stroke-width="1.5"></path><path d="M3 12V20.4C3 20.7314 3.26863 21 3.6 21H12V12H3Z" stroke="currentColor" stroke-width="1.5"></path></svg>
</template>