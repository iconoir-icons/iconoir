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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M21 14L21 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 22.01L21.01 21.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><rect x="7" y="2" width="6" height="12" rx="3" stroke="currentColor" stroke-width="1.5"></rect><path d="M3 10V11C3 14.866 6.13401 18 10 18V18V18C13.866 18 17 14.866 17 11V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 18V22M10 22H7M10 22H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>