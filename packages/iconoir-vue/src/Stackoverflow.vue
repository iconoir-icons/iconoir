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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M19 15V21H5V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 17L8 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.9126 14.6633L8.0874 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.7127 12.3809L9.46228 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.1728 10.6423L12.0444 5.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.0338 8.80409L15.1085 2.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>