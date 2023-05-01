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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M12 9C15.3137 9 18 11.6863 18 15C18 18.3137 15.3137 21 12 21C8.68629 21 6 18.3137 6 15C6 11.6863 8.68629 9 12 9ZM12 9V3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 4L15 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 4L9 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>