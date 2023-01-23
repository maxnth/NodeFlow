import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';

import DashboardPage from '../views/DashboardPage.vue';
import EditorPage from '../views/EditorPage.vue';
import TourPage from '../views/TourPage.vue';
import NotFound from '../components/Layout/NotFound.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardPage,
  },
  {
    path: '/editor',
    name: 'editor',
    component: EditorPage,
  },
  {
    path: '/tour',
    name: 'tour',
    component: TourPage,
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '404',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
