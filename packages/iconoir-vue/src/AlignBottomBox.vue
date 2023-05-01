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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M4 8.00001L4.01 8.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 4.00001L4.01 4.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 4.00001L8.01 4.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 4.00001L12.01 4.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 4.00001L16.01 4.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 4.00001L20.01 4.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 8.00001L20.01 8.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 12V20H20V12H4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>