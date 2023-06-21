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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M4 6V3.6C4 3.26863 4.26863 3 4.6 3H19.4C19.7314 3 20 3.26863 20 3.6V6" stroke="currentColor" stroke-linecap="round"></path><path d="M4 18V20.4C4 20.7314 4.26863 21 4.6 21H19.4C19.7314 21 20 20.7314 20 20.4V18" stroke="currentColor" stroke-linecap="round"></path><path d="M13.5 15V12V9H15.9C16.2314 9 16.5 9.26863 16.5 9.6L16.5 10.5C16.5 11.3284 15.8284 12 15 12V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.5 15H15.9C16.2314 15 16.5 14.7314 16.5 14.4L16.5 13.5C16.5 12.6716 15.8284 12 15 12V12H13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.5 15V12M19.5 12V9H22.5L22.5 12H19.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.5 9L1.5 15L3 12L4.5 15L4.5 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.5 9H7.5L7.5 15L10.5 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.5 12H9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>