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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M10 12H2M2 12L5.5 8.5M2 12L5.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 12H22M22 12L18.5 8.5M22 12L18.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 21L10 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 21L14 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>