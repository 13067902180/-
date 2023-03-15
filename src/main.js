import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dataV from '@jiaminghi/data-view'

import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
createApp(App).use(store).use(dataV).use(ElementPlus).use(router).mount('#app')
