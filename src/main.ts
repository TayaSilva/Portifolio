import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import tsImg from './assets/imagens/ts.png'

const favicon = document.createElement('link')
favicon.rel = 'icon'
favicon.type = 'image/png'
favicon.href = tsImg
document.head.appendChild(favicon)

createApp(App).mount('#app')
