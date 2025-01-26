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
      path: '/sameKey',
      name: 'sameKey',
      component: () => import('../views/SameKey.vue'),
    },
    {
      path: '/increase',
      name: 'increase',
      component: () => import('../views/Increase.vue'),
    },
    {
      path: '/customClock',
      name: 'customClock',
      component: () => import('../views/CustomClock.vue'),
    },
  ],
})

export default router
