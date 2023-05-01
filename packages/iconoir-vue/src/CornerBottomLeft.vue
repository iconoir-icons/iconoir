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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M4.00047 8.00001L4.01047 8.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.00047 4.00001L4.01047 4.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.00047 4.00001L8.01047 4.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.0005 4.00001L12.0105 4.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.0005 4.00001L16.0105 4.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.0005 4.00001L20.0105 4.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.0005 8.00001L20.0105 8.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.0005 12L20.0105 12.0111" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.0005 16L20.0105 16.0111" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.0005 20L20.0105 20.0111" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.0005 20L16.0105 20.0111" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.00047 12.01V20.01H12.0005V12.01H4.00047Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>