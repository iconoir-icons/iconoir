<script lang="ts" setup>
import { inject } from "vue";

import providerKey from "./providerKey";

  const context = inject(providerKey);


</script>
<template>
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M4.5 10.5L8 7L11.5 10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 7V13C8 15.2091 9.79086 17 12 17H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>
