import Vue from 'vue'
import Router from 'vue-router'

//  import page components
import Loading from '@/views/Login/Loading'
import Mainboard from '@/views/Shop/Mainboard'
import Template from '@/views/Template/template'

Vue.use(Router)

export default new Router({
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
