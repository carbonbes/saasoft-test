<template>
  <SelectRoot v-bind="forwarded" @update:modelValue="handleUpdateValue">
    <SelectTrigger as-child>
      <BaseForm as-child>
        <BaseButton
          class="p-2 flex items-center justify-between gap-1 rounded-xl"
          :class="{ '!ring-red-500': props.error }"
        >
          <SelectValue placeholder="Выбрать" />

          <SelectIcon>
            <ITablerChevronDown />
          </SelectIcon>
        </BaseButton>
      </BaseForm>
    </SelectTrigger>

    <SelectPortal>
      <SelectContent
        position="popper"
        align="center"
        :side-offset="5"
        class="w-(--reka-select-trigger-width)"
      >
        <SelectViewport>
          <SelectItem v-for="(item, index) in props.items" :key="index" :value="item.value">
            <SelectItemText>{{ item.label }}</SelectItemText>
          </SelectItem>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>

<script setup lang="ts">
import {
  SelectRoot,
  SelectTrigger,
  SelectPortal,
  SelectContent,
  SelectViewport,
  SelectItem,
  SelectItemText,
  type SelectRootProps,
  type SelectRootEmits,
  useForwardPropsEmits,
  SelectIcon,
  SelectValue,
} from '@/components/shared/Select'
import { BaseButton, BaseForm } from '@/components/shared/Base'
import type { AcceptableValue } from 'reka-ui'

interface Item {
  label: string
  value: string
}

interface SelectProps extends SelectRootProps {
  items: Item[]
  error?: boolean
}

interface SelectEmits extends SelectRootEmits {
  change: [AcceptableValue]
}

const props = defineProps<SelectProps>()
const emits = defineEmits<SelectEmits>()
const forwarded = useForwardPropsEmits(props, emits)

const handleUpdateValue = (value: AcceptableValue) => {
  emits('change', value)
}
</script>
