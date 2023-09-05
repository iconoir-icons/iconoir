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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M12 19.01L12.01 18.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 18V21.4C18 21.7314 17.7314 22 17.4 22H6.6C6.26863 22 6 21.7314 6 21.4V18" stroke="currentColor" stroke-linecap="round"></path><path d="M18 6V2.6C18 2.26863 17.7314 2 17.4 2H6.6C6.26863 2 6 2.26863 6 2.6V6" stroke="currentColor" stroke-linecap="round"></path><path d="M15.5 8.5L19 12L15.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5 8.5L5 12L8.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>