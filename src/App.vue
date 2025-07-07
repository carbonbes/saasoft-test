<template>
  <div class="p-4 flex flex-col gap-8">
    <Control />
    <Hint />
    <Accounts />
  </div>
</template>

<script setup lang="ts">
import Hint from '@/components/AccountManagment/Hint.vue'
import Control from '@/components/AccountManagment/Control.vue'
import Accounts from '@/components/AccountManagment/Accounts.vue'
</script>
