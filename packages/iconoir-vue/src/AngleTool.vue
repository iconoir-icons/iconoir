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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M3 21L3 3L9 3V15L21 15V21H3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 19V21" stroke="currentColor" stroke-linecap="round"></path><path d="M9 19V21" stroke="currentColor" stroke-linecap="round"></path><path d="M3 7H5" stroke="currentColor" stroke-linecap="round"></path><path d="M3 11H5" stroke="currentColor" stroke-linecap="round"></path><path d="M3 15H5" stroke="currentColor" stroke-linecap="round"></path><path d="M17 19V21" stroke="currentColor" stroke-linecap="round"></path></svg>
</template>