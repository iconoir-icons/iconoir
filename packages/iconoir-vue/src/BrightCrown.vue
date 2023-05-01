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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><g clip-path="url(#clip0_3057_14630)"><path d="M22 12L23 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 2V1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 23V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 20L19 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 4L19 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 20L5 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 4L5 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 12L2 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.8 15.5L18 8.5L13.8 10.6L12 8.5L10.2 10.6L6 8.5L7.2 15.5H16.8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_3057_14630"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
</template>