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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M10.25 19.25L6.75 15.75L10.25 12.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.75 15.75H12.75C14.9591 15.75 16.75 13.9591 16.75 11.75V4.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>