import Vue from 'vue'
import VueRouter, { Route, RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientsView from '../views/ClientsView.vue'

Vue.use(VueRouter)

const baseUrl = process.env.NODE_ENV === 'production' ? '/greenvalley' : ''

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      breadCrumb: [
        {
          text: 'Home',
          to: '/'
        }
      ]
    }
  },
  {
    path: baseUrl + '/home',
    name: 'Home',
    component: HomeView,
    meta: {
      breadCrumb: [
        {
          text: 'Home',
          to: '/home'
        }
      ]
    }
  },
  {
    path: baseUrl + '/home/profile',
    name: 'Profile',
    component: HomeView,
    meta: {
      breadCrumb (route: Route) {
        return [
          {
            text: 'Home',
            to: '/home'
          },
          {
            text: 'Profile',
            to: '/home/profile'
          }
        ]
      }
    }
  },
  {
    path: baseUrl + '/home/client',
    name: 'Client',
    component: ClientsView,
    meta: {
      breadCrumb (route: Route) {
        const clientId = route.params.clientId
        return [
          {
            text: 'Home',
            to: '/home'
          },
          {
            text: 'Client',
            to: '/home/client'
          }
        ]
      }
    }
  },
  {
    path: baseUrl + '/home/client/:clientId',
    name: 'Client',
    component: HomeView,
    meta: {
      breadCrumb (route: Route) {
        const clientId = route.params.clientId
        return [
          {
            text: 'Home',
            to: '/home'
          },
          {
            text: 'Client',
            to: '/home/client'
          },
          {
            text: clientId,
            to: '/home/client/' + clientId
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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
