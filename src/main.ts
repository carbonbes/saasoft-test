import './assets/main.css'
import './assets/tailwind.css'
import { plugin, defaultConfig } from '@formkit/vue'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App).use(createPinia()).use(plugin, defaultConfig)

app.mount('#app')
