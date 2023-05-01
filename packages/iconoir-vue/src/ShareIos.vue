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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M20 13V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 15V3M12 3L8.5 6.5M12 3L15.5 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>