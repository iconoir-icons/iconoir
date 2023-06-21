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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M7 4L7 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 9L7 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 12V4M17 4L20 7M17 4L14 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 16L20 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 22.01L20.01 21.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 14V20M7 20L10 17M7 20L4 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>