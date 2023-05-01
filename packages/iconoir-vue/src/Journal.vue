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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M6 6L18 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 10H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 14L18 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 18L18 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 21.4V2.6C2 2.26863 2.26863 2 2.6 2H21.4C21.7314 2 22 2.26863 22 2.6V21.4C22 21.7314 21.7314 22 21.4 22H2.6C2.26863 22 2 21.7314 2 21.4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 18V14H9V18H6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>