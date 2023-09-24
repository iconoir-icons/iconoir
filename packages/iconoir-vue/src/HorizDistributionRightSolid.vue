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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M5 7V17H10.4C10.7314 17 11 16.7314 11 16.4V7.6C11 7.26863 10.7314 7 10.4 7H5Z" fill="currentColor"></path><path d="M5 17V7M5 17H10.4C10.7314 17 11 16.7314 11 16.4V7.6C11 7.26863 10.7314 7 10.4 7H5M5 17V20M5 7V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 7V17H18.4C18.7314 17 19 16.7314 19 16.4V7.6C19 7.26863 18.7314 7 18.4 7H15Z" fill="currentColor"></path><path d="M15 17V7M15 17H18.4C18.7314 17 19 16.7314 19 16.4V7.6C19 7.26863 18.7314 7 18.4 7H15M15 17V20M15 7V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>