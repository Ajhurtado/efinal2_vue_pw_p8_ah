import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DoctorView from '../views/DoctorView.vue'
import PacienteView from '../views/PacienteView.vue'

const routes = [
  { path: '/doctor', component: DoctorView },
  { path: '/paciente', component: PacienteView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})



export default router

