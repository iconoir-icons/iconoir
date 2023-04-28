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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M17 20L17 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 15L17 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 4V20M7 20L4 17M7 20L10 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 10V4M17 4L14 7M17 4L20 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>