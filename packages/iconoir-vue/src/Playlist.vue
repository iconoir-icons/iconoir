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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M2 11L16 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 17L13 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 5L20 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 18.5C20 19.3284 19.3284 20 18.5 20C17.6716 20 17 19.3284 17 18.5C17 17.6716 17.6716 17 18.5 17C19.3284 17 20 17.6716 20 18.5ZM20 18.5V10.6C20 10.2686 20.2686 10 20.6 10H22" stroke="currentColor" stroke-linecap="round"></path></svg>
</template>