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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M13.5 6L10 18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.5 8.5L3 12L6.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.5 8.5L21 12L17.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>