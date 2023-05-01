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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M13 21H5C3.89543 21 3 20.1046 3 19V10H21V13M15 4V2M15 4V6M15 4H10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 10V6C3 4.89543 3.89543 4 5 4H7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 2V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 10V6C21 4.89543 20.1046 4 19 4H18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.9922 18H17.9922M21 18H17.9922M17.9922 18V15M17.9922 18V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>