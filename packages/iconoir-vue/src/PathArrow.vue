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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M18 16.5V3M18 3L21.5 6.5M18 3L14.5 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 16.5C18 18.433 16.433 20 14.5 20C12.567 20 11 18.433 11 16.5V7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 7.5C11 5.567 9.433 4 7.5 4C5.567 4 4 5.567 4 7.5V19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>