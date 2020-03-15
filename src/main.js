import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vClickOutside from 'v-click-outside'
import VueRouterBackButton from 'vue-router-back-button'

Vue.use(vClickOutside)
Vue.use(VueRouterBackButton, { router, ignoreRoutesWithSameName: true })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
