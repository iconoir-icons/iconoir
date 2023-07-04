<script lang="ts" setup>
import { inject } from "vue";

import providerKey from "./providerKey";

  const context = inject(providerKey);


</script>
<template>
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M21 9V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 15V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 21V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 3V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 15L3 9L12 3L21 9L12 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 21L3 15L12 9L21 15L12 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>
