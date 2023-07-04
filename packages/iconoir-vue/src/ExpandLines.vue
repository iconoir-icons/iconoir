<script lang="ts" setup>
import { inject } from "vue";

import providerKey from "./providerKey";

  const context = inject(providerKey);


</script>
<template>
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M18 2L6 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 22L6 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 14V19M12 19L15 16M12 19L9 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 10V5M12 5L15 8M12 5L9 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>
