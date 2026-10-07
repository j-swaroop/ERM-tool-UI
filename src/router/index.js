import { createRouter, createWebHashHistory } from 'vue-router';
import HomeWrapper from '../views/HomeWrapper.vue';
import LoginWrapper from '../views/LoginWrapper.vue';
import RiskEvaluationWrapper from '../views/RiskEvaluationWrapper.vue';

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeWrapper,
    },
    {
      path: '/overview',
      name: 'overview',
      component: HomeWrapper,
    },
    {
      path: '/risk-assessment',
      name: 'risk-assessment',
      component: HomeWrapper,
    },
    {
      path: '/risk-evaluation',
      name: 'risk-evaluation',
      component: RiskEvaluationWrapper,
    },
    {
      path: '/monitoring',
      name: 'monitoring',
      component: HomeWrapper,
    },
    {
      path: '/notification',
      name: 'notification',
      component: HomeWrapper,
    },
    {
      path: '/kris',
      name: 'kris',
      component: HomeWrapper,
    },
    {
      path: '/audit',
      name: 'audit',
      component: HomeWrapper,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginWrapper,
    },
  ],
});

export default router;
