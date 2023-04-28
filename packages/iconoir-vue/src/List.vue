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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M8 6L20 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 6.01L4.01 5.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 12.01L4.01 11.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 18.01L4.01 17.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 12L20 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 18L20 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>