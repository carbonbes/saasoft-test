<template>
  <Primitive
    v-bind="props"
    class="ring-2 ring-gray-200 hover:ring-blue-300 focus:ring-blue-500 disabled:opacity-25 disabled:pointer-events-none outline-none"
  >
    <slot />
  </Primitive>
</template>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'reka-ui'

export type BaseFormProps = PrimitiveProps

const props = defineProps<BaseFormProps>()
</script>
