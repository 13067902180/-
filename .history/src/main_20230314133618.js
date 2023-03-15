import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dataV from '@jiaminghi/data-view'
import * as echarts from 'echarts';
createApp(App).use(store).use(dataV).use(router).use(ECharts).mount('#app')
