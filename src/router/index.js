import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue'
import AddBookView from '../views/AddBookView.vue'
import WeatherView from '../views/WeatherView.vue' 
import CountBookAPI from '../views/CountBookAPI.vue'

const routes = [
  {
    path: '/CountBookAPI',
    name: 'CountBookAPI',
    component: CountBookAPI
  },
  {
    path: '/WeatherCheck',
    name: 'WeatherCheck',
    component: WeatherView   
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView
  },
  {
    path: '/FireRegister',         // ✅ 你希望访问的路由路径
    name: 'FireRegister',          // ✅ 路由名称
    component: FirebaseRegisterView // ✅ 关联的 Vue 文件
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router