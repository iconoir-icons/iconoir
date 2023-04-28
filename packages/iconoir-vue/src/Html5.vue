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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M4 3L5.77778 20.0899L12 22L18.2222 20.0899L20 3H4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 7H7.5L8 11.5H16L15.5 17L12 18L8.5 17L8.25 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>