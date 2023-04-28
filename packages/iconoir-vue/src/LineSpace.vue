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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M11 6H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 18H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 19V5M5 19L3 16.5M5 19L7 16.5M5 5L3 7M5 5L7 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>