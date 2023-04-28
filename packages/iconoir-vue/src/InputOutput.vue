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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M14 19C17.866 19 21 15.866 21 12C21 8.13401 17.866 5 14 5C10.134 5 7 8.13401 7 12C7 15.866 10.134 19 14 19Z" stroke="currentColor" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 19L3 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>