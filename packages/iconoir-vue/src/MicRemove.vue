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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M16.9922 19H19.9922H22.9922" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><rect x="5" y="2" width="6" height="12" rx="3" stroke="currentColor" stroke-width="1.5"></rect><path d="M1 10V11C1 14.866 4.13401 18 8 18V18V18C11.866 18 15 14.866 15 11V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 18V22M8 22H5M8 22H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>