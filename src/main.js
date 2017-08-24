// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import '../node_modules/vue-material/dist/vue-material.css'

//  import page jump Animation
import vueg from 'vueg'
import vuegOption from '@/common/vuegConfig'
import 'vueg/css/transition-min.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

//  use axios do Ajax call
Vue.use(VueAxios, axios)

//  Vuex manage the status
Vue.use(Vuex)

//  apply jump Animation
Vue.use(vueg, router, vuegOption)

//  use Material UI
Vue.use(VueMaterial)
Vue.material.registerTheme({
  default: {
    primary: 'blue',
    accent: 'white'
  },
  green: {
    primary: 'teal',
    accent: 'pink'
  },
  indigo: {
    primary: 'indigo',
    hue: 300,
    accent: 'green',
    textColor: '#00bcd4'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App></App>',
  components: { App }
})
