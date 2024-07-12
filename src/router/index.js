import { createRouter, createWebHistory } from 'vue-router'

//Views
import Landing from '../views/Landing.vue';
import DayReport from '../views/DayReport.vue';
import GamersReport from '../views/PeePeeReport.vue';
import KeyPhrases from '../views/KeyPhrases.vue';
import TimeSlots from '../views/TimeSlots.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Landing
    },
    {
      path: '/dayreport',
      name: 'day',
      component: DayReport
    },
    {
      path:'/biggamers',
      name:'biggamers',
      component: GamersReport
    },
    {
      path:'/keyphrases',
      name:'keyphrases',
      component: KeyPhrases
    },
    {
      path:"/timeslots",
      name:'timeslots',
      component: TimeSlots
    }
  ]
})

export default router
