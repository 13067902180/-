import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import DataV, { setClassNamePrefix } from '.datav-vue3';

createApp(App).use(store).use(DataV, { classNamePrefix: 'dv-' }).use(router).mount('#app')