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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M10 17.01L10.01 16.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 17.01L6.01 16.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 13V20.4C2 20.7314 2.26863 21 2.6 21H21.4C21.7314 21 22 20.7314 22 20.4V13M2 13H22M2 13L4.87172 3.42759C4.94786 3.1738 5.18145 3 5.44642 3H18.5536C18.8185 3 19.0521 3.1738 19.1283 3.42759L22 13" stroke="currentColor" stroke-width="1.5"></path></svg>
</template>