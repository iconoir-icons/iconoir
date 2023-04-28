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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M6 11L12 5L18 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 19L12 13L18 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>