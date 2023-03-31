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
        path: '/walkin-dashboard',
        name: 'Walkin Client Dashboard',
        component: () => import(/* webpackChunkName: "home" */ '@/views/dashboard-option/WalkinClient.vue'),
        meta: {
          title: 'Walkin Client Dashboard'
        }
      },
      {
        path: '/assessment-dashboard',
        name: 'Assessment Client Dashboard',
        component: () => import(/* webpackChunkName: "home" */ '@/views/dashboard-option/AssessmentClient.vue'),
        meta: {
          title: 'Assessment Client Dashboard'
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
      {
        path: '/assessmentdata',
        name: 'Assessment Data',
        component: () => import(/* webpackChunkName: "home" */ '@/views/AssessmentData'),
        meta: {
          title: 'Assessment Data'
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
