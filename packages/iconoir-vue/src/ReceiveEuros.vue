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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M21 12H13M13 12L16.84 8M13 12L16.84 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 7.50265C10.3565 7.18066 9.63357 7 8.86957 7C6.18018 7 4 9.23858 4 12C4 14.7614 6.18018 17 8.86957 17C9.63357 17 10.3565 16.8193 11 16.4974" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 11H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 13H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>