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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M3 3L8.00001 3L8.00001 9H3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 6L15 6L15 18H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 12L22 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 15L8.00001 15L8.00001 21H3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>