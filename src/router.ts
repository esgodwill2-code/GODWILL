import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from './pages/AboutPage.vue'
import ContactPage from './pages/ContactPage.vue'
import HomePage from './pages/HomePage.vue'
import NewsPage from './pages/NewsPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/news', name: 'news', component: NewsPage },
    { path: '/contact', name: 'contact', component: ContactPage },
    { path: '/about', name: 'about', component: AboutPage },
  ],
})

export default router
