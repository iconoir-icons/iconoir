<script lang="ts" setup>
import { inject } from "vue";

import providerKey from "./providerKey";

  const context = inject(providerKey);


</script>
<template>
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M16 9.5L16.6923 8M22 9.5L21.3077 8M21.3077 8L19 3L16.6923 8M21.3077 8H16.6923" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 10H10V3L2 14H8V21L14 12.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>
