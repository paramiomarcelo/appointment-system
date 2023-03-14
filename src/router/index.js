import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: HomeView
  },
  {
    path:'/register',
    name:'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/:id',
    name: 'app-page',
    component:() => import(/* webpackChunkName: "daybook-noentry" */ '../components/Appointment.vue'),
    props:(route) => {
        return {
            id: route.params.id
        }
    }
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
