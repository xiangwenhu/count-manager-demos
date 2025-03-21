import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    },{
      path: '/clockFactor',
      name: 'clockFactor',
      component: () => import('../views/ClockFactor.vue'),
    }
  ],
})

export default router
