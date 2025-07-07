<template>
  <BaseForm
    v-bind="forwarded"
    :value="props.modelValue"
    @input="handleInput"
    class="p-2 rounded-xl placeholder:text-gray-400"
    :class="{ 'ring-red-500': props.error }"
  />
</template>

<script setup lang="ts">
import { BaseForm, type BaseFormProps } from '@/components/shared/Base'
import { useForwardPropsEmits } from 'reka-ui'

export interface InputProps extends BaseFormProps {
  type?: 'text' | 'password'
  placeholder?: string
  required?: boolean
  maxLength?: number
  modelValue?: string
  error?: boolean
}

export interface InputEmits {
  'update:modelValue': [string]
}

const props = withDefaults(defineProps<InputProps>(), {
  as: 'input',
  type: 'text',
})
const emits = defineEmits<InputEmits>()
const forwarded = useForwardPropsEmits(props, emits)

function handleInput(e: InputEvent) {
  const value = (e.target as HTMLInputElement).value.trim()

  emits('update:modelValue', value)
}
</script>
