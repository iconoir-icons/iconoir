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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M12 20.5L22.5 4H18.5L12 14L5.5 4H1.5L12 20.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.5 4H14.5L12 7.5L9.5 4H5.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>