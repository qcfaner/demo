import Vue from 'vue'
// 安装并使用 elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
Vue.use(ElementUI, { size: 'small' })

Vue.config.productionTip = false

function getInfo() {

}
getInfo()

new Vue({
  render: h => h(App)
}).$mount('#app')
