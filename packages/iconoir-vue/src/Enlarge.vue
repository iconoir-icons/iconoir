<script lang="ts" setup>
import { inject } from "vue";

import providerKey from "./providerKey";

  const context = inject(providerKey);


</script>
<template>
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M15 9L20 4M20 4V8M20 4H16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 15L4 20M4 20V16M4 20H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>
