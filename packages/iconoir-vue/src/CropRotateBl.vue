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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M4 14V17C4 19.2091 5.79086 21 8 21H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.5 16.5L4 14L6.5 16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 11L20 5C20 4.44772 19.5523 4 19 4L13 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 4H10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 16V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 2L10 13C10 13.5523 10.4477 14 11 14L22 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>