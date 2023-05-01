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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M15 11H5C3.89543 11 3 10.1046 3 9V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 21V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 3V7V11V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 7H3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>