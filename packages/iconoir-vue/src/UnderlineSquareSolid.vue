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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 3.6C2.25 2.85441 2.85442 2.25 3.6 2.25H20.4C21.1456 2.25 21.75 2.85442 21.75 3.6V20.4C21.75 21.1456 21.1456 21.75 20.4 21.75H3.6C2.85441 21.75 2.25 21.1456 2.25 20.4V3.6ZM8 5.25C8.41421 5.25 8.75 5.58579 8.75 6V10C8.75 11.7949 10.2051 13.25 12 13.25C13.7949 13.25 15.25 11.7949 15.25 10V6C15.25 5.58579 15.5858 5.25 16 5.25C16.4142 5.25 16.75 5.58579 16.75 6V10C16.75 12.6234 14.6234 14.75 12 14.75C9.37665 14.75 7.25 12.6234 7.25 10V6C7.25 5.58579 7.58579 5.25 8 5.25ZM6 17.25C5.58579 17.25 5.25 17.5858 5.25 18C5.25 18.4142 5.58579 18.75 6 18.75L18 18.75C18.4142 18.75 18.75 18.4142 18.75 18C18.75 17.5858 18.4142 17.25 18 17.25L6 17.25Z" fill="currentColor"></path></svg>
</template>