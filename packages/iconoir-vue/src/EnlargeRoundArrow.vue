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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M8.5 9.5L6 12L8.5 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.5 9.5L18 12L15.5 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 15V9C2 6.79086 3.79086 5 6 5H18C20.2091 5 22 6.79086 22 9V15C22 17.2091 20.2091 19 18 19H6C3.79086 19 2 17.2091 2 15Z" stroke="currentColor" stroke-width="1.5"></path></svg>
</template>