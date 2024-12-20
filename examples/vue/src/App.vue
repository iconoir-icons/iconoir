<script setup lang="ts">
import {
  Check,
  Iconoir,
  IconoirProvider,
  Medal1st,
  Medal1stSolid,
} from '@iconoir/vue';
</script>

<template>
  <Iconoir />
  <Medal1st color="red" height="36" width="36" />
  <Medal1stSolid />

  <IconoirProvider
    :icon-props="{
      'color': '#1E441E',
      'stroke-width': 1,
      'width': '2em',
      'height': '2em',
    }"
  >
    <Check />
  </IconoirProvider>
</template>
