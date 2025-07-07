<template>
  <SelectViewport v-bind="forwardedProps" class="flex flex-col gap-1">
    <slot />
  </SelectViewport>
</template>

<script setup lang="ts">
import { SelectViewport, type SelectViewportProps, useForwardProps } from 'reka-ui'

const props = defineProps<SelectViewportProps>()
const forwardedProps = useForwardProps(props)
</script>
