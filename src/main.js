import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import DynamicComponent from './components/DynamicComponent.vue'

import './styles/app.css';
import router from './router'

const app = createApp(App)
app.component('Dynamic', DynamicComponent)
app.use(createPinia())
app.use(router)

app.mount('#app')
