<script lang="ts" setup>
import { inject } from "vue";

import providerKey from "./providerKey";

  const context = inject(providerKey);


</script>
<template>
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M21 3V21H3V3H21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 16.5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 7.5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.5 3V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 3V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.5 3V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>
