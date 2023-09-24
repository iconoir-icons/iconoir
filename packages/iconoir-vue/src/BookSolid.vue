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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.75 16.7143C20.75 16.7631 20.7453 16.8109 20.7364 16.8571C20.7453 16.9034 20.75 16.9511 20.75 17C20.75 17.4142 20.4142 17.75 20 17.75H6C5.30964 17.75 4.75 18.3096 4.75 19C4.75 19.6904 5.30964 20.25 6 20.25H20C20.4142 20.25 20.75 20.5858 20.75 21C20.75 21.4142 20.4142 21.75 20 21.75H6C4.48122 21.75 3.25 20.5188 3.25 19V5C3.25 3.48122 4.48122 2.25 6 2.25H19.4C20.1456 2.25 20.75 2.85442 20.75 3.6V16.7143ZM9 6.25C8.58579 6.25 8.25 6.58579 8.25 7C8.25 7.41421 8.58579 7.75 9 7.75H15C15.4142 7.75 15.75 7.41421 15.75 7C15.75 6.58579 15.4142 6.25 15 6.25H9Z" fill="currentColor"></path></svg>
</template>