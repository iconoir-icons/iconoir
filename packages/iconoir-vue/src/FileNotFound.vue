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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M12 8L12 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 16.01L12.01 15.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 3H4V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 11V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 11V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 3H20V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 21H4V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 21H20V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>