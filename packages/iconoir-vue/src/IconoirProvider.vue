<script setup lang="ts">
import type { SVGAttributes } from 'vue-demi';
import { provide } from 'vue-demi';
import providerKey from './providerKey';

interface Props {
  iconProps: SVGAttributes;
}
const props = defineProps<Props>();
provide(providerKey, props.iconProps);
</script>

<template>
  <slot />
</template>
