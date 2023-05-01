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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M19.5 16L17.0248 12.6038" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 17.5V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.5 16L6.96895 12.6124" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 8C6.6 16 17.4 16 21 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>