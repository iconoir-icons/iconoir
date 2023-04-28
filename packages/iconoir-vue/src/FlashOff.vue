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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M8.79459 8.78243L5 14H11V21L15 15.5M17.1818 12.5L19 10H13V3L10.8182 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 4L20 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>