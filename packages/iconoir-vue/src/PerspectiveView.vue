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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M1 21L4.14286 3H19.8571L23 21H1Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 16.5H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 7.5H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 3V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 3.5L6.5 20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 3.5L17.5 20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>