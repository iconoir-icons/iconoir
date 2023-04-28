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
    <svg width="24" stroke-width="1.5" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M9 6L20 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.80002 5.79999L4.60002 6.59998L6.60001 4.59999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.80002 11.8L4.60002 12.6L6.60001 10.6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.80002 17.8L4.60002 18.6L6.60001 16.6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 12L20 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 18L20 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>