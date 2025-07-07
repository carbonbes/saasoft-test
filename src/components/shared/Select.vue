<template>
  <SelectRoot v-bind="forwarded">
    <SelectTrigger>
      <slot />
    </SelectTrigger>

    <SelectPortal>
      <SelectContent position="popper" align="center" :side-offset="5">
        <SelectViewport>
          <SelectItem v-for="(item, index) in props.items" :key="index" :value="item">
            <SelectItemText>{{ item }}</SelectItemText>
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
} from '@/components/shared/Select'

export interface SelectProps extends SelectRootProps {
  items: string[]
}

const props = defineProps<SelectProps>()
const emits = defineEmits<SelectRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>
