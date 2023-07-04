<script lang="ts" setup>
import { inject } from "vue";

import providerKey from "./providerKey";

  const context = inject(providerKey);


</script>
<template>
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M11 5L14 5M17 5L14 5M14 5L10 19M10 19L7 19M10 19L13 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>
