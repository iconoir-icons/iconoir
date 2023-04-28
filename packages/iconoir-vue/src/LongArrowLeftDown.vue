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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M4.5 13.5L8 17L11.5 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 17V11C8 8.79086 9.79086 7 12 7H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>