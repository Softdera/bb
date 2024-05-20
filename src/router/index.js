import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import insight from '../components/Insight.vue'
import advance from '../components/Advance.vue'
import data from '../components/Data.vue'
import period from '../components/Period.vue'
import unit from '../components/Unit.vue'
import fixed from '../components/fixed.vue'
import relative from '../components/relative.vue'


const routes = [
 
  {
    path: '/fixed',
    name: 'fixed',
    component: fixed
  },
  {
    path: '/relative',
    name: 'relative',
    component: relative
  },
  {
    path: '/insight',
    name: 'insight',
    component: insight
  },
  {
    path: '/advance',
    name: 'advance',
    component: advance
  },
  {
    path: '/data',
    name: 'data',
    component: data
  },
  {
    path: '/period',
    name: 'period',
    component: period
  },
  {
    path: '/unit',
    name: 'unit',
    component: unit
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
 /* {
    path: '/advance',
    name: 'advance',
    component: advance
  },*/
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
