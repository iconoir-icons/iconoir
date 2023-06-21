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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M19 13.5L15.5 17L12 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.5 17V11C15.5 8.79086 13.7091 7 11.5 7H4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>