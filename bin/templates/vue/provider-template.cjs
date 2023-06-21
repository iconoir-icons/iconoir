const template = (keyFileName) => `<script setup lang="ts">
import { provide } from "vue-demi";
import type { SVGAttributes } from "vue-demi";  
import providerKey from "./${keyFileName}";
interface Props {
    iconProps: SVGAttributes
}
const props = defineProps<Props>();
provide(providerKey, props.iconProps);
</script>
<template>
<slot />
</template>`;

module.exports = template;
