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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.75 17C21.75 19.6234 19.6234 21.75 17 21.75H7C4.37665 21.75 2.25 19.6234 2.25 17V7C2.25 4.37665 4.37665 2.25 7 2.25H17C19.6234 2.25 21.75 4.37665 21.75 7V17ZM7 16.75C6.58579 16.75 6.25 16.4142 6.25 16V8C6.25 7.58579 6.58579 7.25 7 7.25C7.41421 7.25 7.75 7.58579 7.75 8V15.25L11 15.25C11.4142 15.25 11.75 15.5858 11.75 16C11.75 16.4142 11.4142 16.75 11 16.75L7 16.75ZM13.25 16C13.25 16.4142 13.5858 16.75 14 16.75C14.4142 16.75 14.75 16.4142 14.75 16V13.0056L14.7501 13.0019C14.7504 12.9942 14.7512 12.9787 14.7531 12.9566C14.7569 12.9122 14.7651 12.8425 14.7823 12.7565C14.8173 12.5816 14.8862 12.3557 15.0181 12.1359C15.2528 11.7447 15.7541 11.25 17 11.25C17.4142 11.25 17.75 10.9142 17.75 10.5C17.75 10.0858 17.4142 9.75 17 9.75C16.0271 9.75 15.2865 9.98237 14.732 10.3359C14.6571 10.0006 14.3578 9.75 14 9.75C13.5858 9.75 13.25 10.0858 13.25 10.5V16Z" fill="currentColor"></path></svg>
</template>