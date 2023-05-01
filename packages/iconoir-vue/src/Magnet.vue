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
    <svg width="24" stroke-width="1.5" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M4 4V12.2963C4 16.5509 7.58172 20 12 20C16.4183 20 20 16.5509 20 12.2963V4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 4H9.62963V10.8182C9.62963 12.0232 10.6909 13 12 13C13.3091 13 14.3704 12.0232 14.3704 10.8182V4H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 8L4 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 8L15 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>