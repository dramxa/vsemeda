import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

// регистрируем компоненты
import registerComponents   from './components/_registerComponents'

registerComponents();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
