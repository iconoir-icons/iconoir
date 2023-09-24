<script lang="ts">
import { defineComponent, inject } from "vue-demi";
import type { SVGAttributes } from "vue-demi";
import providerKey from "./providerKey";
export default defineComponent<SVGAttributes>(() => {
  const context = inject(providerKey);
  return { context };
});
</script>
<template>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.6 2.25C2.85442 2.25 2.25 2.85441 2.25 3.6V20.4C2.25 21.1456 2.85441 21.75 3.6 21.75H20.4C21.1456 21.75 21.75 21.1456 21.75 20.4V3.6C21.75 2.85442 21.1456 2.25 20.4 2.25H3.6ZM10.409 9.34835C10.1161 9.05546 9.64121 9.05546 9.34831 9.34835C9.05542 9.64124 9.05542 10.1161 9.34831 10.409L10.9393 12L9.34831 13.591C9.05542 13.8839 9.05542 14.3588 9.34831 14.6517C9.64121 14.9445 10.1161 14.9445 10.409 14.6517L12 13.0607L13.591 14.6517C13.8838 14.9445 14.3587 14.9445 14.6516 14.6517C14.9445 14.3588 14.9445 13.8839 14.6516 13.591L13.0606 12L14.6516 10.409C14.9445 10.1161 14.9445 9.64124 14.6516 9.34835C14.3587 9.05546 13.8838 9.05546 13.591 9.34835L12 10.9393L10.409 9.34835Z" fill="currentColor"></path></svg>
</template>