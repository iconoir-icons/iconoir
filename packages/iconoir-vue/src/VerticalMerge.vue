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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M12 2V10M12 10L15.5 6.5M12 10L8.5 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22V14M12 14L15.5 17.5M12 14L8.5 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 14L21 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 10L21 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>