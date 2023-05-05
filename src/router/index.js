// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [

  // USER-SIDE ROUTES
  {
    path: '/',
    component: () => import('@/layouts/user/User.vue'),
    children: [
      {
        path: '/homepage',
        name: 'Homepage',
        component: () => import('@/views/user-side/Homepage.vue'),
      },
      {
        path: '/departmentslist',
        name: 'Departments List',
        component: () => import('@/views/user-side/DepartmentsListPage.vue'),
      },
      {
        path: '/QuestionsListPage',
        name: 'Questions List',
        component: () => import('@/views/user-side/QuestionsListPage'),
      },
    ]
  },
  // USER-SIDE ROUTES ENDS HERE

  {
    path: '/login',
    component: () => import('@/layouts/login/Login.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/admin-side/Dashboard.vue'),
      },
    ]
  },

  {
    path: '/default',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/admin-side/Home.vue'),
        meta: {
          title: 'Home'
        }
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/admin-side/Dashboard.vue'),
        meta: {
          title: 'Dashboard'
        }
      },
      {
        path: '/walkin-dashboard',
        name: 'Walkin Client Dashboard',
        component: () => import('@/views/admin-side/dashboard-option/WalkinClient.vue'),
        meta: {
          title: 'Walkin Client Dashboard'
        }
      },
      {
        path: '/assessment-dashboard',
        name: 'Assessment Client Dashboard',
        component: () => import('@/views/admin-side/dashboard-option/AssessmentClient.vue'),
        meta: {
          title: 'Assessment Client Dashboard'
        }
      },
      {
        path: '/faqlist',
        name: 'FAQ List',
        component: () => import('@/views/admin-side/FaqList.vue'),
        meta: {
          title: 'FAQ List'
        }
      },
      // FAQ List route
      {
        path: '/faqs',
        name: '',
        component: () => import('@/views/admin-side/faqlist-option/Faqs.vue'),
        meta: {
          title: `FAQ List/`
        }
      },
      // Ends Here
      {
        path: '/clientdata',
        name: 'Client Data',
        component: () => import('@/views/admin-side/ClientData.vue'),
        meta: {
          title: 'Client Data'
        }
      },
      {
        path: '/summaryreport',
        name: 'Summary Report',
        component: () => import('@/views/admin-side/SummaryReport.vue'),
        meta: {
          title: 'Summary Report'
        }
      },
      {
        path: '/assessmentdata',
        name: 'Assessment Data',
        component: () => import('@/views/admin-side/AssessmentData'),
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
