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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M9.5 14.5L3 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.67602 7.8896L6.69713 7.78823L5.00007 9.48528L14.1925 18.6777L15.8895 16.9806L15.7879 16M11.4847 7L15.1568 2.67141L21.0065 8.5211L16.6991 12.175" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 3L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>