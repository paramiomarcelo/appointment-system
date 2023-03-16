import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: HomeView
  },
  {
    path:'/register',
    name:'register',
    component: () => import('../pages/Register.vue')
  },
  {
    path: '/appointment',
    name: 'app-page',
    component:() => import(/* webpackChunkName: "daybook-noentry" */ '../pages/Appointment.vue'),
 
}
  /*{
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import('../views/AboutView.vue')
    }
  }*/
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
