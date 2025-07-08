<template>
  <div class="flex flex-col gap-6">
    <div class="grid grid-cols-5 gap-x-4 text-gray-400">
      <p>Метки</p>
      <p>Тип записи</p>
      <p>Логин</p>
      <p>Пароль</p>
    </div>

    <div class="flex flex-col gap-4">
      <Account :account="{}" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Account from '@/components/AccountManagment/Accounts/Account.vue'
</script>
