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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M3 12H6L6 4L12 4L12 20L18 20L18 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.5 12H15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5 12H9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>