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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M3 22L8.5 16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 5L17.5 7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 21H15.5L8.49996 9L2.66663 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.5 3L21.5 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5 9L14.5 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.5 21L21.5 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>