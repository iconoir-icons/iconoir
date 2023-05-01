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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M5 5V8V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.50005 8C12.5001 8 11.0001 8 15.0001 8C15.0001 8 15.0001 8 15.0001 8C15.0001 8 20.0001 8 20.0001 12.7059C20.0001 18 15.0001 18 15.0001 18C11.5715 18 9.71434 18 6.28577 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.5 11.5C10.1332 10.1332 9.36683 9.36683 8 8C9.36683 6.63317 10.1332 5.86683 11.5 4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>