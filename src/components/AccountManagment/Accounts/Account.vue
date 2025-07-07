<template>
  <div class="grid grid-cols-5 gap-x-4">
    <Input v-model="state.tags" />

    <Select
      v-model="state.type"
      :items="['Локальная', 'LDAP']"
      :default-value="account.type === 'local' ? 'Локальная' : 'LDAP'"
    />

    <Input v-model="state.login" :class="{ 'col-span-2': state.type === 'ldap' }" />

    <Input v-show="account.type === 'local'" v-model="state.password" type="password" />

    <BaseButton>
      <ITablerTrash class="text-red-500" />
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Input, Select } from '@/components/AccountManagment/shared'
import { BaseButton } from '@/components/shared/Base'

export interface AccountTag {
  text: string
}

export interface Account {
  tags: AccountTag[]
  type: 'local' | 'ldap'
  login: string
  password: string
}

const { account } = defineProps<{
  account: Account
}>()

const getTagsString = () =>
  Object.values(account.tags)
    .map((tag) => tag.text)
    .join('; ')

const state = reactive({
  tags: getTagsString(),
  type: account.type,
  login: account.login,
  password: account.password,
})
</script>
