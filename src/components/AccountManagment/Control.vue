<template>
  <div class="flex items-center gap-4">
    <p>Учетные записи</p>

    <BaseForm as-child>
      <BaseButton class="p-2 rounded-xl" @click="add">
        <ITablerPlus />
      </BaseButton>
    </BaseForm>
  </div>
</template>

<script setup lang="ts">
import { BaseButton, BaseForm } from '@/components/shared/Base'
import { useAccountsStore } from '@/stores/accounts.ts'

const { add } = useAccountsStore()
</script>
