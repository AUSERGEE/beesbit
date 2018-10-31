import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(iView, VueAxios, axios, VueAwesomeSwiper)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
