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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M3 6H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 14H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 10L18 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 18L18 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>