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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M22 17C13 17 11 22.9999 2 22.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 1C13 1 11 6.9999 2 6.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 16.5V7.5M12 16.5L14.5 14M12 16.5L9.5 14M12 7.5L14.5 10M12 7.5L9.5 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>