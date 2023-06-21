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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M12 16V14V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 9V8.5V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5"></circle><path d="M3.9532 4.5C2.12105 6.46488 1 9.10152 1 12C1 14.8985 2.12105 17.5351 3.9532 19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.0468 4.5C21.8789 6.46488 23 9.10152 23 12C23 14.8985 21.8789 17.5351 20.0468 19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>