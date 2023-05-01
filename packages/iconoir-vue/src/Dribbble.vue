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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.6726 20.8435C15.5 14 12.5 8.00003 8.5 2.62964" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.06653 10.8406C6.00004 11 15.2829 10.5 19.1415 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.9677 12.81C15.3438 10.8407 7.50002 14.0001 5.23145 19.3613" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>