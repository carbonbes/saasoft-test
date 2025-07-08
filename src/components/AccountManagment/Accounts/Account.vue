<template>
  <div class="grid grid-cols-5 gap-x-4">
    <Input v-bind="tagsAttrs" v-model="tags" :max-length="50" @blur="handleBlur" />

    <Select
      v-bind="typeAttrs"
      v-model="type"
      :items="[
        { label: 'Локальная', value: 'local' },
        { label: 'LDAP', value: 'ldap' },
      ]"
      :error="!!errors.type"
      @change="handleChange"
    />

    <Input
      v-bind="loginAttrs"
      v-model="login"
      :max-length="100"
      :class="{ 'col-span-2': type === 'ldap' }"
      :error="!!errors.login"
      @blur="handleBlur"
    />

    <Input
      v-show="!type || type === 'local'"
      v-bind="passwordAttrs"
      v-model="password"
      :max-length="100"
      :error="!!errors.password"
      type="password"
      @blur="handleBlur"
    />

    <BaseButton>
      <ITablerTrash class="text-red-500" />
    </BaseButton>
  </div>

  <pre>{{ meta }}</pre>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { Input, Select } from '@/components/AccountManagment/shared'
import { BaseButton } from '@/components/shared/Base'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

export interface AccountTag {
  text: string
}

export interface Account {
  tags: AccountTag[]
  type: 'local' | 'ldap'
  login: string
  password: string | null
}

const { account } = defineProps<{
  account: Account
}>()

const emits = defineEmits<{ add: [Account]; remove: [void] }>()

const getTagsString = computed(() => {
  if (!account.tags) return

  return Object.values(account.tags)
    .map((tag) => tag.text)
    .join('; ')
})

const getTagsObj = computed(() => {
  if (!tags.value) return

  return tags.value
    .split(';')
    .filter(Boolean)
    .map((tag) => ({
      text: tag,
    }))
})

const initialValues = {
  tags: getTagsString.value,
  type: account.type,
  login: account.login,
  password: account.password,
}

const outputValues = computed(() => ({
  tags: getTagsObj.value,
  type: type.value,
  login: login.value,
  password: password.value,
}))

const validationSchema = yup.object({
  tags: yup.string().max(50),
  type: yup.string().required(),
  login: yup.string().required().max(100),
  password: yup
    .string()
    .when('type', {
      is: 'local',
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    })
    .max(100),
})

const { defineField, meta, errors, validate } = useForm({ initialValues, validationSchema })

watch(
  () => meta.value.valid,
  (valid) => {
    if (valid) emits('add', outputValues.value)
  },
)

const handleBlur = () => validate()
const handleChange = () => validate()

const [tags, tagsAttrs] = defineField('tags')
const [type, typeAttrs] = defineField('type')
const [login, loginAttrs] = defineField('login')
const [password, passwordAttrs] = defineField('password')

watch(type, (type) => {
  if (type === 'ldap') password.value = null
})
</script>
