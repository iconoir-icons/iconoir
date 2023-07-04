<script lang="ts" setup>
import { inject } from "vue";

import providerKey from "./providerKey";

  const context = inject(providerKey);


</script>
<template>
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M2 20V16C2 8.26801 8.26801 2 16 2H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.8388 20.8391H17.3033M20.8388 20.8391V17.3035M20.8388 20.8391L18 18.0003" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 9L16 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="2 3"></path></svg>
</template>
