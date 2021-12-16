// 引入windi css
import '@/plugins/windicss'

import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// 引入element-plus
import { setupElementPlus } from '@/plugins/elementPlus'
setupElementPlus(app)

// 引入状态管理
import { setupStore } from '@/store'
setupStore(app)

app.mount('#app')
