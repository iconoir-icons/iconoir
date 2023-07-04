<script lang="ts" setup>
import { inject } from "vue";

import providerKey from "./providerKey";

  const context = inject(providerKey);


</script>
<template>
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M3 12C3.00015 8.14286 4.28571 3 6.85714 3C10.7143 2.9999 13.2857 21 17.1429 21C19.7143 21 21 15.8571 21 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 12H5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.5 12H16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.5 12H8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>
