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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M2 4L22 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 8.01L3.01 7.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 16.01L3.01 15.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 12.01L6.01 11.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 20.01L6.01 19.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 8.01L9.01 7.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 16.01L9.01 15.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12.01L12.01 11.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 20.01L12.01 19.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 8.01L15.01 7.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 16.01L15.01 15.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 12.01L18.01 11.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 20.01L18.01 19.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 8.01L21.01 7.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 16.01L21.01 15.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>