import Vue from 'vue'
import App from './App.vue'
import router from 'router'
import store from 'store'
import * as filters from 'filters' // 过滤器
import {Button} from 'element-ui'
Vue.use(Button)

Vue.config.productionTip = false

/**
 * 注册全局过滤器
 * */
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
