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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><g clip-path="url(#clip0_3787_399)"><path d="M17.6744 11.4078L15.7691 17.1236C15.7072 17.3094 15.5586 17.4532 15.3709 17.509L3.69348 20.9807C3.22819 21.119 2.79978 20.6763 2.95328 20.2158L6.74467 8.84167C6.79981 8.67625 6.92419 8.543 7.08543 8.4766L12.472 6.25859C12.696 6.16636 12.9535 6.21785 13.1248 6.38913L17.5294 10.7938C17.6901 10.9545 17.7463 11.1922 17.6744 11.4078Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.2959 20.6016L9.65986 14.2376" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.4029 3.18183L20.7666 5.54552C21.4727 6.25158 21.4893 7.3911 20.8042 8.11745C20.0901 8.8744 18.8919 8.89188 18.1561 8.15608L15.7924 5.79239C15.0766 5.07655 15.0708 3.91775 15.7795 3.19485C16.4982 2.46172 17.677 2.45587 18.4029 3.18183Z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.7814 12.1159C11.1956 11.5301 10.2458 11.5301 9.66004 12.1159C9.07426 12.7017 9.07426 13.6514 9.66004 14.2372C10.2458 14.823 11.1956 14.823 11.7814 14.2372C12.3671 13.6514 12.3671 12.7017 11.7814 12.1159Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_3787_399"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
</template>