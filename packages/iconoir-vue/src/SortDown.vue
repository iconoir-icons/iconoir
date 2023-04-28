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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M14 10L2 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 14H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 18H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 6L2 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 10V20M19 20L22 17M19 20L16 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>