import { createRouter, createWebHistory } from 'vue-router'

// make all paths and names lowercase for consistency
const routes = [
  {
    path: '/',
    name: 'homepage',
    props: true,
    component: () => import('../components/homePage.vue')
  },
  {
    path: '/login',
    name: 'login',
    props: true,
    component: () => import('../components/login.vue')
  },
  {
    path: '/intakeform',
    name: 'intakeform',
    props: true,
    component: () => import('../components/intakeForm.vue')
  },
  {
    path: '/findclient',
    name: 'findclient',
    component: () => import('../components/findClient.vue')
  },
  {
    path: '/updateclient/:id',
    name: 'updateclient',
    props: true,
    component: () => import('../components/updateClient.vue')
  },
  {
    path: '/eventform',
    name: 'eventform',
    component: () => import('../components/eventForm.vue')
  },
  {
    path: '/serviceform',
    name: 'serviceform',
    component: () => import('../components/serviceForm.vue')
  },
  {
    path: '/findevents',
    name: 'findevents',
    component: () => import('../components/findEvents.vue')
  },
  {
    path: '/findservices',
    name: 'findservices',
    component: () => import('../components/findService.vue')
  },
  {
    path: '/eventdetails/:id',
    name: 'eventdetails',
    props: true,
    component: () => import('../components/eventDetails.vue')
  },
  {
    path: '/servicedetails/:id',
    name: 'servicedetails',
    props: true,
    component: () => import('../components/serviceDetails.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
