<script lang="ts">
import { defineComponent, inject } from "vue-demi";
import type { SVGAttributes } from "vue-demi";
import providerKey from "./providerKey";
export default defineComponent<SVGAttributes>(() => {
  const context = inject(providerKey);
  return { context };
});
</script>
<template>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.6 2.25C2.85442 2.25 2.25 2.85441 2.25 3.6V20.4C2.25 21.1456 2.85441 21.75 3.6 21.75H20.4C21.1456 21.75 21.75 21.1456 21.75 20.4V3.6C21.75 2.85442 21.1456 2.25 20.4 2.25H3.6ZM14.25 8C14.25 7.683 14.0507 7.40023 13.7521 7.29365C13.4536 7.18708 13.1203 7.27972 12.9195 7.52507L8.41953 13.0251C8.23602 13.2494 8.19815 13.5593 8.32225 13.8212C8.44635 14.083 8.71021 14.25 9 14.25H12.75V16C12.75 16.4142 13.0858 16.75 13.5 16.75C13.9142 16.75 14.25 16.4142 14.25 16V14.25H15C15.4142 14.25 15.75 13.9142 15.75 13.5C15.75 13.0858 15.4142 12.75 15 12.75H14.25V8ZM12.75 10.1011V12.75H10.5827L12.75 10.1011Z" fill="currentColor"></path></svg>
</template>