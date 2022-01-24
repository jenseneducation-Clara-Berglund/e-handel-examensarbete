import Vue from 'vue'
import App from './views/App.vue'
import router from './router'
import store from './store'
import { ClientTable } from 'vue-tables-2'
Vue.config.productionTip = false

Vue.use(ClientTable)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
