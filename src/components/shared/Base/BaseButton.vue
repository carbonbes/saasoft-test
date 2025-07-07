<template>
  <Primitive
    v-bind="forwardedProps"
    class="cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
  >
    <slot />
  </Primitive>
</template>

<script setup lang="ts">
import { Primitive, type PrimitiveProps, useForwardProps } from 'reka-ui'

export type BaseButtonProps = PrimitiveProps

const props = withDefaults(defineProps<BaseButtonProps>(), {
  as: 'button',
})

const forwardedProps = useForwardProps(props)
</script>
