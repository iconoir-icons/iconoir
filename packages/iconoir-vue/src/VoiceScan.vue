<script lang="ts" setup>
import { inject } from "vue";

import providerKey from "./providerKey";

  const context = inject(providerKey);


</script>
<template>
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M12 6L12 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 9L9 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 11L18 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 11L6 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 7L15 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 3H3V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 3H21V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 21H3V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 21H21V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>
