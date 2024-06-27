import { createRouter, createWebHistory } from 'vue-router'

//Views
import Landing from '../views/Landing.vue';
import DayReport from '../views/DayReport.vue';
import GamersReport from '../views/PeePeeReport.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Landing
    },
    {
      path: '/dayReport',
      name: 'day',
      component: DayReport
    },
    {
      path:'/bigGamers',
      name:'bigGamers',
      component: GamersReport
    }
  ]
})

export default router
