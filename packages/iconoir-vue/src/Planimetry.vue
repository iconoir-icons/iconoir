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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M11 16L11 11L3 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 8H15V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 18L15 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 19V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 3V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 15H15L15 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 9V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>