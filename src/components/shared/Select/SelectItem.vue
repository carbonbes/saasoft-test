<template>
  <SelectItem v-bind="forwardedProps" as-child>
    <BaseButton
      class="px-2 py-1 w-full rounded-lg hover:bg-gray-100 data-[state=checked]:bg-blue-100 data-[state=checked]:text-bue-500"
    >
      <slot />
    </BaseButton>
  </SelectItem>
</template>

<script setup lang="ts">
import { SelectItem, type SelectItemProps, useForwardProps } from 'reka-ui'
import { BaseButton } from '@/components/shared/Base'

const props = defineProps<SelectItemProps>()
const forwardedProps = useForwardProps(props)
</script>
