<script lang="ts" setup>
import { inject } from "vue";

import providerKey from "./providerKey";

  const context = inject(providerKey);


</script>
<template>
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M19 19L6 6M6 6L6 18.48M6 6L18.48 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>
