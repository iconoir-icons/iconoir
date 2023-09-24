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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM12.6103 4.56407C12.4695 4.36697 12.2422 4.25 12 4.25C11.7578 4.25 11.5305 4.36697 11.3897 4.56407L6.3897 11.5641C6.20343 11.8248 6.20343 12.1752 6.3897 12.4359L11.3897 19.4359C11.5305 19.633 11.7578 19.75 12 19.75C12.2422 19.75 12.4695 19.633 12.6103 19.4359L17.6103 12.4359C17.7966 12.1752 17.7966 11.8248 17.6103 11.5641L12.6103 4.56407ZM12 17.7097L8.71267 13.1074L11.8529 13.7354C11.95 13.7549 12.05 13.7549 12.1471 13.7354L15.2873 13.1074L12 17.7097ZM12.75 12.0851L15.7155 11.492L12.75 7.34035L12.75 12.0851ZM11.25 12.0851L11.25 7.34035L8.2845 11.492L11.25 12.0851Z" fill="currentColor"></path></svg>
</template>