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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M7.00009 20V9C7.00009 9 3.00004 4 9.50009 4H17.0001C24.0002 4 20.0001 9 20.0001 9V18C20.0001 19.1046 19.1047 20 18.0001 20H7.00009Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.00009 20H6.00009C4.89552 20 4.00009 19.1046 4.00009 18V9C4.00009 9 4.00543e-05 4 6.50009 4H10.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>