<script lang="ts" setup>
import { inject } from "vue";

import providerKey from "./providerKey";

  const context = inject(providerKey);


</script>
<template>
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M9 21H12M15 21H12M12 21L12 11M12 7L12 11M12 11L6 11L9 3H15L18 11H12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>
