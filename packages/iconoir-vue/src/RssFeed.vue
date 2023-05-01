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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M12 19C12 14.8 9.2 12 5 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 19C19 10.6 13.4 5 5 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 19.01L5.01 18.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>