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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4C11 4.55228 11.4477 5 12 5Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 23L8.11111 19M17 23L15.8889 19M9.5 14L8.11111 19M9.5 14H13.5M9.5 14L10.2998 11.1208M8.11111 19H15.8889M15.8889 19L14.7045 14.7361M11.4444 7L12 5L13.0466 8.76759" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 3L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>