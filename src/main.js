import { createApp } from 'vue'
import App from './App.vue'

import './assets/scss/main.scss'

import Maska from 'maska'

const app = createApp(App)

app.use(Maska)

app.mount('#app')
