// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [

  {
    path: '/',
    component: () => import('@/layouts/login/Login.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Dashboard.vue'),
      },
    ]
  },
  {
    path: '/home',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
        meta: {
          title: 'Home'
        }
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Dashboard.vue'),
        meta: {
          title: 'Dashboard'
        }
      },
      {
        path: '/faqlist',
        name: 'FAQ List',
        component: () => import(/* webpackChunkName: "home" */ '@/views/FaqList.vue'),
        meta: {
          title: 'FAQ List'
        }
      },
      {
        path: '/clientdata',
        name: 'Client Data',
        component: () => import(/* webpackChunkName: "home" */ '@/views/ClientData.vue'),
        meta: {
          title: 'Client Data'
        }
      },
      {
        path: '/summaryreport',
        name: 'Summary Report',
        component: () => import(/* webpackChunkName: "home" */ '@/views/SummaryReport.vue'),
        meta: {
          title: 'Summary Report'
        }
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
