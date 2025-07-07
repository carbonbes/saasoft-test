<template>
  <SelectContent
    v-bind="forwarded"
    class="p-1 bg-white ring-1 ring-gray-300/50 shadow-lg rounded-xl"
  >
    <slot />
  </SelectContent>
</template>

<script setup lang="ts">
import {
  SelectContent,
  type SelectContentEmits,
  type SelectContentProps,
  useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<SelectContentProps>()
const emits = defineEmits<SelectContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>
