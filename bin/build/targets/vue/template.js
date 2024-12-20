function template(svg) {
  return `<script lang="ts">
import type { SVGAttributes } from 'vue';
import { defineComponent, inject } from 'vue';
import providerKey from '../providerKey';

export default defineComponent<SVGAttributes>({
  setup() {
    const context = inject(providerKey);
    return { context };
  },
});
</script>

<template>
  ${svg}
</template>`;
}

export default template;
