import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Standard.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/SameKey.vue'),
    },
  ],
})

export default router
