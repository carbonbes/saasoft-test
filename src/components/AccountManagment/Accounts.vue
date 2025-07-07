<template>
  <div class="flex flex-col gap-6">
    <div class="grid grid-cols-5 gap-x-4 text-gray-400">
      <p>Метки</p>
      <p>Тип записи</p>
      <p>Логин</p>
      <p>Пароль</p>
    </div>

    <div class="flex flex-col gap-4">
      <Account v-for="(account, i) in accounts" :key="i" :account />
    </div>
  </div>
</template>

<script setup lang="ts">
import Account from '@/components/AccountManagment/Accounts/Account.vue'

const accounts = [
  {
    tags: [{ text: 'бананы' }, { text: 'яблоки' }, { text: 'персики' }],
    type: 'local',
    login: 'test@test.com',
    password: '123456werwer',
  },
  {
    tags: [{ text: 'яхта' }, { text: 'вилла' }],
    type: 'ldap',
    login: 'pasfff@gmail.com',
    password: null,
  },
  {
    tags: [{ text: 'дом' }, { text: 'квартира' }, { text: 'сарай' }],
    type: 'local',
    login: 'gfgd4@mail.com',
    password: '12we425',
  },
  {
    tags: [{ text: 'первый' }, { text: 'второй' }],
    type: 'local',
    login: 'fgdfgi34345@mail.ru',
    password: '235t233we223',
  },
]
</script>
