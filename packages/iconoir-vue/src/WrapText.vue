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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M4 7H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 17H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 12H17.5C18.8807 12 20 13.1193 20 14.5V14.5C20 15.8807 18.8807 17 17.5 17H12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 15.5L12.5 17L15 18.5V15.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>