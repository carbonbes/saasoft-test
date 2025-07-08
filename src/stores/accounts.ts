import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface Account {
  id: ReturnType<typeof crypto.randomUUID>
  tags: { text: string }[]
  type: 'local' | 'ldap'
  login: string
  password: string | null
}

export const useAccountsStore = defineStore('accounts', () => {
  const accounts = ref<Account[]>([])

  const saveToLocalStorage = (value: Account[]) => {
    localStorage.setItem('accounts', JSON.stringify(value))
  }

  const getFromLocalStorage = () => {
    const accountsFromLS = localStorage.getItem('accounts')
    if (!accountsFromLS) return

    accounts.value = JSON.parse(accountsFromLS)
  }

  const add = () => {
    accounts.value.push({ id: crypto.randomUUID() } as Account)
  }

  const update = ({ accountId, account }: { accountId: Account['id']; account: Account }) => {
    const i = accounts.value.findIndex((account) => account.id === accountId)
    if (i === -1) return

    accounts.value[i] = account
    saveToLocalStorage(accounts.value)
  }

  const remove = (accountId: Account['id']) => {
    const i = accounts.value.findIndex((account) => account.id === accountId)
    if (i === -1) return

    accounts.value.splice(i, 1)
    saveToLocalStorage(accounts.value)
  }

  return { accounts, add, update, remove, getFromLocalStorage }
})
