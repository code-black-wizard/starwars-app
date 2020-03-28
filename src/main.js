import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import CustomInput from '@/components/UI/CustomInput'
import Spinner from '@/components/UI/Spinner'
import Pagination from '@/components/UI/Pagination'
import Navbar from '@/components/UI/Navbar'

Vue.component('CustomInput', CustomInput)
Vue.component('Spinner', Spinner)
Vue.component('Pagination', Pagination)
Vue.component('Navbar', Navbar)

Vue.config.productionTip = false

Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
