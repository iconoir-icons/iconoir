<script lang="ts" setup>
import { inject } from "vue";

import providerKey from "./providerKey";

  const context = inject(providerKey);


</script>
<template>
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M3 21L3 3L9 3V15L21 15V21H3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 19V21" stroke="currentColor" stroke-linecap="round"></path><path d="M9 19V21" stroke="currentColor" stroke-linecap="round"></path><path d="M3 7H5" stroke="currentColor" stroke-linecap="round"></path><path d="M3 11H5" stroke="currentColor" stroke-linecap="round"></path><path d="M3 15H5" stroke="currentColor" stroke-linecap="round"></path><path d="M17 19V21" stroke="currentColor" stroke-linecap="round"></path></svg>
</template>
