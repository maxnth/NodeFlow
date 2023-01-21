import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';

import DashboardPage from "../views/DashboardPage.vue";
import EditorPage from '../views/EditorPage.vue';
import TourPage from "../views/TourPage.vue";
import SettingsPage from "../views/SettingsPage.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
