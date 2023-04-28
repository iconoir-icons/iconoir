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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M6 20L18 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 16V4M12 4L15.5 7.5M12 4L8.5 7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>