<template>
  <div ref="accountRef" class="grid grid-cols-5 gap-x-4">
    <Input :max-length="50" />

    <Select
      required
      :items="['Локальная', 'LDAP']"
      :default-value="account.type === 'local' ? 'Локальная' : 'LDAP'"
    />

    <Input required :max-length="100" :class="{ 'col-span-2': account.type === 'ldap' }" />

    <Input
      v-show="account.type === 'local'"
      type="password"
      :required="account.type === 'local'"
      :max-length="100"
    />

    <BaseButton>
      <ITablerTrash class="text-red-500" />
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { Input, Select } from '@/components/AccountManagment/shared'
import { BaseButton } from '@/components/shared/Base'

const { account } = defineProps<{ account: { type: 'local' | 'ldap' } }>()

const accountRef = useTemplateRef('accountRef')
</script>
