<template>
  <div class="flex flex-col gap-6">
    <div class="grid grid-cols-5 gap-x-4 text-gray-400">
      <p>Метки</p>
      <p>Тип записи</p>
      <p>Логин</p>
      <p>Пароль</p>
    </div>

    <div class="flex flex-col gap-4">
      <Account v-for="account in accounts" :key="account.id" :account />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Account from '@/components/AccountManagment/Accounts/Account.vue'
import { storeToRefs } from 'pinia'
import { useAccountsStore } from '@/stores/accounts.ts'

const { accounts } = storeToRefs(useAccountsStore())
const { getFromLocalStorage } = useAccountsStore()

onMounted(getFromLocalStorage)
</script>
