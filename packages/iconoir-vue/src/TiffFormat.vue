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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M4 6V3.6C4 3.26863 4.26863 3 4.6 3H19.4C19.7314 3 20 3.26863 20 3.6V6" stroke="currentColor" stroke-linecap="round"></path><path d="M4 18V20.4C4 20.7314 4.26863 21 4.6 21H19.4C19.7314 21 20 20.7314 20 20.4V18" stroke="currentColor" stroke-linecap="round"></path><path d="M12 15L12 9H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.5 15V9H20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.5 9H5M6.5 9H5M5 9L5 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12H14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.5 12H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 15L9 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>