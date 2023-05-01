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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M12 2C20 2 20 5 20 5C20 5 20 8 12 8C4 8 4 5 4 5C4 5 4 2 12 2Z" stroke="currentColor"></path><path d="M12 16C20 16 20 19 20 19C20 19 20 22 12 22C4 22 4 19 4 19C4 19 4 16 12 16Z" stroke="currentColor"></path><path d="M20 5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>