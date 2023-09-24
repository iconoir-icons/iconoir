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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM8.25 17C8.25 16.5858 8.58579 16.25 9 16.25L15 16.25C15.4142 16.25 15.75 16.5858 15.75 17C15.75 17.4142 15.4142 17.75 15 17.75H9C8.58579 17.75 8.25 17.4142 8.25 17ZM16.0303 10.0303L12.5303 13.5303C12.2374 13.8232 11.7626 13.8232 11.4697 13.5303L7.96967 10.0303C7.67678 9.73744 7.67678 9.26256 7.96967 8.96967C8.26256 8.67678 8.73744 8.67678 9.03033 8.96967L11.25 11.1893V6C11.25 5.58579 11.5858 5.25 12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.1893L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303Z" fill="currentColor"></path></svg>
</template>