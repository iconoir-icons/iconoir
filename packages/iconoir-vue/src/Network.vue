<script lang="ts" setup>
import { inject } from "vue";

import providerKey from "./providerKey";

  const context = inject(providerKey);


</script>
<template>
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><rect x="3" y="2" width="7" height="5" rx="0.6" stroke="currentColor" stroke-width="1.5"></rect><rect x="8.5" y="17" width="7" height="5" rx="0.6" stroke="currentColor" stroke-width="1.5"></rect><rect x="14" y="2" width="7" height="5" rx="0.6" stroke="currentColor" stroke-width="1.5"></rect><path d="M6.5 7V10.5C6.5 11.6046 7.39543 12.5 8.5 12.5H15.5C16.6046 12.5 17.5 11.6046 17.5 10.5V7" stroke="currentColor" stroke-width="1.5"></path><path d="M12 12.5V17" stroke="currentColor" stroke-width="1.5"></path></svg>
</template>
