import Vue from 'vue'
import Router from 'vue-router'

//  import page components
import Loading from '@/views/Loading/Loading'
import Login from '@/views/Login/Login'
import Mainboard from '@/views/Shop/Mainboard'
import Shopping from '@/views/Shop/Shopping'
import ShoppingCart from '@/views/Shop/ShoppingCart'
import Myorders from '@/views/Shop/Myorders'
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
      path: '/home',
      name: 'Mainboard',
      component: Mainboard,
      children: [
        { path: '/home/shopping', name: 'shopping', component: Shopping },
        { path: '/home/shoppingcart', name: 'shoppingcart', component: ShoppingCart },
        { path: '/home/myorders', name: 'myorders', component: Myorders }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/template',
      name: 'Template',
      component: Template
    }
  ]
})
