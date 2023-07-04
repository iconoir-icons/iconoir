<script lang="ts" setup>
import { inject } from "vue";

import providerKey from "./providerKey";

  const context = inject(providerKey);


</script>
<template>
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M9.14286 3.00375L14.8571 3M9.14286 3.00375L2 15.0038M9.14286 3.00375L14.0446 12.5M14.8571 3L5.575 21M14.8571 3L21.5 14M5.575 21L2 15.0038M5.575 21H12.0036M2 15.0038H12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 16L18 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 22.01L18.01 21.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>
