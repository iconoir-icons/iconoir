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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M4 10L12 18L15 15L20 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 4V12M16 12L19 9M16 12L13 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>