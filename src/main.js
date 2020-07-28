import Vue from 'vue'
// 安装并使用 elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
Vue.use(ElementUI, { size: 'small' })

import VueAMap from 'vue-amap';
Vue.use(VueAMap);

// 初始化vue-amap
VueAMap.initAMapApiLoader({
  key: '106e6614c35c79d5d6b3386f7f93f3b6',
  plugin: ['VueAMap.PlaceSearch'],
  uiVersion: '1.0', // ui库版本，不配置不加载,
  v: '1.4.4'
});

Vue.config.productionTip = false

function getInfo() {

}
getInfo()

new Vue({
  render: h => h(App)
}).$mount('#app')
