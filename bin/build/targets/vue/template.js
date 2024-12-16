function template(svg) {
  return `<script lang="ts">
import { defineComponent, inject } from "vue-demi";
import type { SVGAttributes } from "vue-demi";
import providerKey from "../providerKey";

export default defineComponent<SVGAttributes>(() => {
  const context = inject(providerKey);
  return { context };
});
</script>

<template>
  ${svg}
</template>`;
}

export default template;
