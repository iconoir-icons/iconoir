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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M3.99977 20L4.01088 20.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.99977 16L4.01088 16.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.99977 12L4.01088 12.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.99977 8L4.01088 8.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.99977 4L4.01088 4.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.9998 4L16.0109 4.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.9998 4L12.0109 4.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.9998 12L12.0109 12.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.99977 4L8.01088 4.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.9998 20L16.0109 20.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.9998 20L12.0109 20.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.99977 20L8.01088 20.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.0098 4L20.0098 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>