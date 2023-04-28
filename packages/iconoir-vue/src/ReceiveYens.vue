<script lang="ts">
import { defineComponent } from "vue-demi";
import type { SVGAttributes } from "vue-demi";
import providerKey from "./providerKey";
export default defineComponent<SVGAttributes>({
    inject: {
        context: { from: providerKey }
    }
});
</script>
<template>
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M21 12H13M13 12L16.84 8M13 12L16.84 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 13H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 7L7 12.5M11 7L7 12.5M7 12.5V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 15H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>