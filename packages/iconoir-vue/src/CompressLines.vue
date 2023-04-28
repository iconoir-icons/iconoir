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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M18 2L6 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 22L6 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 5V10M12 10L15 7M12 10L9 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 19V14M12 14L15 17M12 14L9 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>