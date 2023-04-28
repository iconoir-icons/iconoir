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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M20 10V7C20 4.79086 18.2091 3 16 3H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22.5 7.5L20 10L17.5 7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 17L14 11C14 10.4477 13.5523 10 13 10L7 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 10H4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 22V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 8L4 19C4 19.5523 4.44772 20 5 20L16 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>