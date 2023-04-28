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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M4 7L4 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 7L23 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 10L20 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 7L20 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>