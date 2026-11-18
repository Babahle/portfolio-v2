import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import ProjectsPage from '@/pages/ProjectsPage.vue'
import ProZagaCaseStudyPage from '@/pages/ProZagaCaseStudyPage.vue'
import PortfolioCaseStudyPage from '@/pages/PortfolioCaseStudyPage.vue'
import GalleryPage from '@/pages/GalleryPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/about', name: 'about', component: AboutPage },
    { path: '/projects', name: 'projects', component: ProjectsPage },
    { path: '/projects/pro-zaga', name: 'pro-zaga', component: ProZagaCaseStudyPage },
    { path: '/projects/portfolio', name: 'portfolio', component: PortfolioCaseStudyPage },
    { path: '/gallery', name: 'gallery', component: GalleryPage },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundPage },
  ],
  // Restore the position on back/forward, otherwise start at the top.
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition ?? { top: 0 }
  },
})

export default router
