<script lang="ts" setup>
import { inject } from "vue";

import providerKey from "./providerKey";

  const context = inject(providerKey);


</script>
<template>
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M11 6L5 12L11 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 6L13 12L19 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>
