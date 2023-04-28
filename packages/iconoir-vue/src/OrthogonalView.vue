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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M3 21V3H21V21H3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 16.5H12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 7.5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.5 3V12V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 3V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.5 3V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>