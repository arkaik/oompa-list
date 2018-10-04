import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Store from 'store'
import expire from 'store/plugins/expire'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Store.addPlugin(expire)
