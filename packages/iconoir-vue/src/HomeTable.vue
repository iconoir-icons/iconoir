<script lang="ts" setup>
import { inject } from "vue";

import providerKey from "./providerKey";

  const context = inject(providerKey);


</script>
<template>
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M4 7L4 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 7L23 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 10L20 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 7L20 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>
