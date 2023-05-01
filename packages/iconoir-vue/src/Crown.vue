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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M19.2 17L21 7L14.7 10L12 7L9.3 10L3 7L4.8 17H19.2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>