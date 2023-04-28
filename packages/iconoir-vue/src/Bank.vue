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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M3 9.5L12 4L21 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 20H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 9L14 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 17L6 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 17L10 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 17L14 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 17L18 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>