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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 12L23 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 2V1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 23V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 20L19 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 4L19 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 20L5 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 4L5 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 12L2 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>