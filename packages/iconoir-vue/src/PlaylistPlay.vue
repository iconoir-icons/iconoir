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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M22 17.5L18.5 20V15L22 17.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 5L20 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 11L20 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 17L14 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>