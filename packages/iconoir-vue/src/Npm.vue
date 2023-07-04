<script lang="ts" setup>
import { inject } from "vue";

import providerKey from "./providerKey";

  const context = inject(providerKey);


</script>
<template>
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M1 8L23 8V15L11 15V17L7.5 17V15L1 15V8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.5 8L7.5 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.5 8V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 11V15" stroke="currentColor" stroke-linecap="round"></path><path d="M5 11V15" stroke="currentColor" stroke-linecap="round"></path><path d="M11 11V12" stroke="currentColor" stroke-linecap="round"></path><path d="M20.5 11V15" stroke="currentColor" stroke-linecap="round"></path></svg>
</template>
