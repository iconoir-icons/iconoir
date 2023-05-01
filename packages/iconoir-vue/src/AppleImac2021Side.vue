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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M6 22L8 22M14 22L8 22M8 22L10 13.5M10 13.5L7 2M10 13.5L11.5 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 22L18 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>