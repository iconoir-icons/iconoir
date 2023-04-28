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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M2 4H18C19.1045 4 19.9999 4.89543 20 5.99999L20 18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 9V4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 8H3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>