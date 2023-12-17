import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'flowbite';
import { defaultThemeColors } from "./configs/colors";

const app = createApp(App)

app.config.globalProperties.$colors = defaultThemeColors;

app.use(createPinia())
app.use(router)

app.mount('#app')
