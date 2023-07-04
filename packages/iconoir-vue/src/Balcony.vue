<script lang="ts" setup>
import { inject } from "vue";

import providerKey from "./providerKey";

  const context = inject(providerKey);


</script>
<template>
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M4 13V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 13V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 13V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 13V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 13V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 21L22 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 13L22 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 10V3.6C18 3.26863 17.7314 3 17.4 3H6.6C6.26863 3 6 3.26863 6 3.6V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>
