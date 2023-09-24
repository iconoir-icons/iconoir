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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 2.25C4.27208 2.25 1.25 5.27208 1.25 9V15C1.25 18.7279 4.27208 21.75 8 21.75H16C19.7279 21.75 22.75 18.7279 22.75 15V9C22.75 5.27208 19.7279 2.25 16 2.25H8ZM12.359 8.28866C12.5183 7.90631 12.3375 7.4672 11.9551 7.30789C11.5728 7.14857 11.1337 7.32938 10.9744 7.71173L9.3077 11.7117C9.21125 11.9432 9.23687 12.2076 9.37597 12.4162C9.51506 12.6249 9.74924 12.7502 10 12.7502H12.875L11.641 15.7117C11.4817 16.0941 11.6625 16.5332 12.0449 16.6925C12.4272 16.8518 12.8663 16.671 13.0256 16.2887L14.6923 12.2887C14.7888 12.0572 14.7631 11.7928 14.624 11.5842C14.4849 11.3755 14.2508 11.2502 14 11.2502H11.125L12.359 8.28866Z" fill="currentColor"></path></svg>
</template>