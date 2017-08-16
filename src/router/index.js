import Vue from 'vue'
import Router from 'vue-router'

//  import page components
import Loading from '@/views/Login/Loading'
import Mainboard from '@/views/Shop/Mainboard'
import Template from '@/views/Template/template'

//  import page jump Animation
import vueg from 'vueg'
import vuegOption from '@/common/vuegConfig'
import 'vueg/css/transition-min.css'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Loading',
      component: Loading
    },
    {
      path: '/shop',
      name: 'Mainboard',
      component: Mainboard
    },
    {
      path: '/template',
      name: 'Template',
      component: Template
    }
  ]
})

Vue.use(vueg, router, vuegOption)

export default router
