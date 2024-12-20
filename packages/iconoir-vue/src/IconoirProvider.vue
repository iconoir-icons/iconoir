<script setup lang="ts">
import type { SVGAttributes } from 'vue';
import { provide, toRef } from 'vue';
import providerKey from './providerKey';

const props = defineProps<{
  iconProps: SVGAttributes;
}>();

const iconProps = toRef(props, 'iconProps');

provide(providerKey, iconProps);
</script>

<template>
  <slot />
</template>
