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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M8 19C11.866 19 15 15.866 15 12C15 8.13401 11.866 5 8 5C4.13401 5 1 8.13401 1 12C1 15.866 4.13401 19 8 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 19C19.866 19 23 15.866 23 12C23 8.13401 19.866 5 16 5C12.134 5 9 8.13401 9 12C9 15.866 12.134 19 16 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>