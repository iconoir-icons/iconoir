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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M4 16L4.01 15.9889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 20L4.01 19.9889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 20L8.01 19.9889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 20L12.01 19.9889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 20L16.01 19.9889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 20L20.01 19.9889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 16L20.01 15.9889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 12V4H20V12H4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>