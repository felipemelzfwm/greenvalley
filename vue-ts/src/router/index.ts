import Vue from 'vue'
import VueRouter, { Route, RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientsView from '../views/ClientsView.vue'

Vue.use(VueRouter)

// const baseUrl = process.env.NODE_ENV === 'production' ? '/greenvalley' : ''
// process.env.BASE_URL
const baseUrl = process.env.NODE_ENV === 'production' ? '/greenvalley/' : '/'

console.log('baseUrl = ' + baseUrl)
//    path: '/',
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      breadCrumb: [
        {
          text: 'Home',
          to: baseUrl
        }
      ]
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView,
    meta: {
      breadCrumb: [
        {
          text: 'Home',
          to: baseUrl + 'home'
        }
      ]
    }
  },
  {
    path: '/home/profile',
    name: 'Profile',
    component: HomeView,
    meta: {
      breadCrumb (route: Route) {
        return [
          {
            text: 'Home',
            to: baseUrl + 'home'
          },
          {
            text: 'Profile',
            to: baseUrl + 'home/profile'
          }
        ]
      }
    }
  },
  {
    path: '/home/client',
    name: 'Client',
    component: ClientsView,
    meta: {
      breadCrumb (route: Route) {
        const clientId = route.params.clientId
        return [
          {
            text: 'Home',
            to: baseUrl + 'home'
          },
          {
            text: 'Client',
            to: baseUrl + 'home/client'
          }
        ]
      }
    }
  },
  {
    path: '/home/client/:clientId',
    name: 'Client',
    component: HomeView,
    meta: {
      breadCrumb (route: Route) {
        const clientId = route.params.clientId
        return [
          {
            text: 'Home',
            to: baseUrl + 'home'
          },
          {
            text: 'Client',
            to: baseUrl + 'home/client'
          },
          {
            text: clientId,
            to: baseUrl + 'home/client/' + clientId
          }
        ]
      }
    }
  }
/*  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  } */
]

// console.log('process.env.BASE_URL = ' + baseUrl)
const router = new VueRouter({
  mode: 'history',
  base: baseUrl,
  routes
})

export default router
