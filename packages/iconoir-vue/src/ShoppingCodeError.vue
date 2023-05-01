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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M6 5V7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 5V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 5V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 10V16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 18.5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 18.5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 14V16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 13V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 5V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 9V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.1213 21.364L18.2427 19.2427M18.2427 19.2427L20.364 17.1213M18.2427 19.2427L16.1213 17.1213M18.2427 19.2427L20.364 21.364" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>