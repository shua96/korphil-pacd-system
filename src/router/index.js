// Composables
import { useAppStore } from '@/stores/app';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [

  // USER-SIDE ROUTES
  {
    path: '/',
    component: () => import('@/views/user-side/Homepage.vue'),
  },
  {
    path: '/departments-list',
    component: () => import('@/views/user-side/DepartmentsListPage.vue'),
  },
  {
    path: '/questions-list',
    component: () => import('@/views/user-side/QuestionsListPage'),
  },
  {
    path: '/feedback',
    component: () => import('@/views/user-side/feedback'),
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
        path: '/training',
        name: 'Training',
        component: () => import('@/views/admin-side/faqlist-option/Training.vue'),
        meta: {
          title: `FAQ List/`
        }
      },
      {
        path: '/registrar',
        name: 'Registrar',
        component: () => import('@/views/admin-side/faqlist-option/Registrar.vue'),
        meta: {
          title: `FAQ List/`
        }
      },
      {
        path: '/certificationassessment',
        name: 'Certification & Assessment',
        component: () => import('@/views/admin-side/faqlist-option/CertificationAssessment.vue'),
        meta: {
          title: `FAQ List/`
        }
      },
      {
        path: '/procurement',
        name: 'Procurement',
        component: () => import('@/views/admin-side/faqlist-option/Procurement.vue'),
        meta: {
          title: `FAQ List/`
        }
      },
      {
        path: '/accounting',
        name: 'Accounting',
        component: () => import('@/views/admin-side/faqlist-option/Accounting.vue'),
        meta: {
          title: `FAQ List/`
        }
      },
      {
        path: '/admin',
        name: 'Admin',
        component: () => import('@/views/admin-side/faqlist-option/Admin.vue'),
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

router.beforeEach(routeGuard);

async function routeGuard(to) {
  let app = useAppStore();
  if (to.href == '/login') {
    return true;
  }

  // if (to.href == '/') {
  //   return true;
  // }

  switch (to.href) {
    case '/':
    case '/departments-list':
    case '/questions-list':
    case '/feedback':
      return true;
      break;
  }

  await app.loginCheck();
  if (app.user) {
    return true;
  }

  router.push('/login');
}

export default router
