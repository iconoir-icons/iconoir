<script lang="ts" setup>
import { inject } from "vue";

import providerKey from "./providerKey";

  const context = inject(providerKey);


</script>
<template>
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M12 16V19C12 20.1046 11.1046 21 10 21H9C7.89543 21 7 20.1046 7 19V18C7 16.8954 7.89543 16 9 16H12ZM12 16V8M12 8V4L17 3V7L12 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>
