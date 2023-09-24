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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><rect x="16" y="3" width="5" height="18" rx="2" fill="currentColor"></rect><rect x="9.5" y="9" width="5" height="12" rx="2" fill="currentColor"></rect><rect x="3" y="16" width="5" height="5" rx="2" fill="currentColor"></rect></svg>
</template>