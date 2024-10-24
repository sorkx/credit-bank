import { 
    createRouter, 
    createWebHistory,
} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Main',
		component: () => import('@/views/MainPage/MainPage.vue'),
    },
]

const router = createRouter({
    mode: 'history',
  	history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior (to) {
        return to.hash ? { el: to.hash } : { top: 0 }
    },
})

export default router