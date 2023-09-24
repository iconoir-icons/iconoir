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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 3.6C2.25 2.85441 2.85442 2.25 3.6 2.25H20.4C21.1456 2.25 21.75 2.85442 21.75 3.6V20.4C21.75 21.1456 21.1456 21.75 20.4 21.75H3.6C2.85441 21.75 2.25 21.1456 2.25 20.4V3.6ZM5.25 18C5.25 17.5858 5.58579 17.25 6 17.25L18 17.25C18.4142 17.25 18.75 17.5858 18.75 18C18.75 18.4142 18.4142 18.75 18 18.75L6 18.75C5.58579 18.75 5.25 18.4142 5.25 18ZM12.5303 5.46967C12.2374 5.17678 11.7626 5.17678 11.4697 5.46967L7.96967 8.96967C7.67678 9.26256 7.67678 9.73744 7.96967 10.0303C8.26256 10.3232 8.73744 10.3232 9.03033 10.0303L11.25 7.81066V14C11.25 14.4142 11.5858 14.75 12 14.75C12.4142 14.75 12.75 14.4142 12.75 14V7.81066L14.9697 10.0303C15.2626 10.3232 15.7374 10.3232 16.0303 10.0303C16.3232 9.73744 16.3232 9.26256 16.0303 8.96967L12.5303 5.46967Z" fill="currentColor"></path></svg>
</template>