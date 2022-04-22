import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Form from '../views/Form.vue'
import Formproj from '../views/Formproj.vue'
import Thanks from '../views/Thanks.vue'
import Testinrov from '../views/Testinrov.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/opros/:id',
    name: 'Form',
    component: Form
  },
  {
    path: '/opros/start/:id',
    name: 'FormQ',
    component: Formproj
  },
  {
    path: '/opros/end/:id',
    name: 'Thanks',
    component: Thanks
  },
  {
    path: '/opros',
    name: 'Testinrov',
    component: Testinrov
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
