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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M8 13V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 13V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 15V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 17.6073C21.4937 17.0221 23 15.6889 23 13C23 9 19.6667 8 18 8C18 6 18 2 12 2C6 2 6 6 6 8C4.33333 8 1 9 1 13C1 15.6889 2.50628 17.0221 4 17.6073" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>