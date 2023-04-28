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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M4 16.01L4.01 15.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 20.01L4.01 19.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 8.01L4.01 7.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 4.01L4.01 3.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 12.01L4.01 11.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12.01L12.01 11.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 20.01L8.01 19.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 20.01L12.01 19.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 20.01L16.01 19.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 20.01L20.01 19.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 16.01L20.01 15.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 12.01L20.01 11.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 8.01L20.01 7.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 4.01L20.01 3.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 4.01L16.01 3.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 4.01L12.01 3.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 4.01L8.01 3.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>