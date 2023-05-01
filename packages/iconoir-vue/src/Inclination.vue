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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M22 19H3.41074C2.88164 19 2.61154 18.3649 2.97855 17.9838L16.4444 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 16C19.5 12.5 19 11 17 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>