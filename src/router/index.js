/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Navigation1 from '../navigations/Navigation1.vue'
import Navigation2 from '../navigations/Navigation2.vue'
import Navigation3 from '../navigations/Navigation3.vue'
import Navigation4 from '../navigations/Navigation4.vue'
import Navigation5 from '../navigations/Navigation5.vue'
import Navigation6 from '../navigations/Navigation6.vue'
import Navigation7 from '../navigations/Navigation7.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Navigation1',
      name: 'Navigation1',
      component: Navigation1,
    },
    {
      path: '/Navigation2',
      name: 'Navigation2',
      component: Navigation2,
    },
    {
      path: '/Navigation3',
      name: 'Navigation3',
      component: Navigation3,
    },
    {
      path: '/Navigation4',
      name: 'Navigation4',
      component: Navigation4,
    },
    {
      path: '/Navigation5',
      name: 'Navigation5',
      component: Navigation5,
    },
    {
      path: '/Navigation6',
      name: 'Navigation6',
      component: Navigation6,
    },
    {
      path: '/Navigation7',
      name: 'Navigation7',
      component: Navigation7,
    },
  ],
})
export default router
