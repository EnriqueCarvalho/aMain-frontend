import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/TheLogin.vue'),
  },
  {
    path: '/login',
    component: () => import('pages/TheLogin.vue'),
  },
  {
    path: '/register',
    component: () => import('pages/TheRegister.vue'),
  },
  {
    path: '/cadastro-paciente',
    component: () => import('pages/CadastroPaciente.vue'),
  },
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
