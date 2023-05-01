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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5"></circle><path d="M19.812 12.9893C21.6252 14.5004 22.5667 15.8535 22.1738 16.6414C21.4428 18.1075 16.3687 17.0617 10.8406 14.3054C5.31236 11.5492 1.42346 8.12624 2.15445 6.6601C2.54636 5.87405 4.18666 5.81005 6.47602 6.34458" stroke="currentColor" stroke-width="1.5"></path></svg>
</template>