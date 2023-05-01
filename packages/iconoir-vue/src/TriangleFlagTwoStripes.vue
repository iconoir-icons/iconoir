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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M8 21L8 16M8 16L17.7231 9.51793C18.0866 9.2756 18.0775 8.73848 17.7061 8.50854L8.91581 3.06693C8.5161 2.81949 8 3.10699 8 3.57709V16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 11.0001L14.5 6.52393" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>