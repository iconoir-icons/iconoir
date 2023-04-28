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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M3 19H12M21 19H12M12 19V13M12 13H18V5H6V13H12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 9.01L9.01 8.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 9.01L12.01 8.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>