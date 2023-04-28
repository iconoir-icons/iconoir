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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M8.61096 15.8891L20.6318 3.86829M8.61096 15.8891H5.78253L2.9541 18.7175H5.78253V21.546L8.61096 18.7175V15.8891ZM20.6318 3.86829H17.8033M20.6318 3.86829V6.69671" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>