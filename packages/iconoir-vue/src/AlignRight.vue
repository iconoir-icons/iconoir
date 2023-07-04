<script lang="ts" setup>
import { inject } from "vue";

import providerKey from "./providerKey";

  const context = inject(providerKey);


</script>
<template>
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M7 10L21 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 6H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 18L21 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 14H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>
