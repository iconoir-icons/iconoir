<script lang="ts" setup>
import { inject } from "vue";

import providerKey from "./providerKey";

  const context = inject(providerKey);


</script>
<template>
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M16 5V11C16 13.2091 14.2091 15 12 15V15C9.79086 15 8 13.2091 8 11V5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 19L18 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>
