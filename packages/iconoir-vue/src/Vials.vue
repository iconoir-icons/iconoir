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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M21 21H3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 12H5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 12H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 18C5.89543 18 5 17.1046 5 16V3H9V16C9 17.1046 8.10457 18 7 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 18C15.8954 18 15 17.1046 15 16V3H19V16C19 17.1046 18.1046 18 17 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>