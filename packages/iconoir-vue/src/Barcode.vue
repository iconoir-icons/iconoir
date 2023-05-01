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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M5 19L5 5L6 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 19L12 5L13 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 5L9 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 5L16 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 5L19 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 5L6 19H5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 5L13 19H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>