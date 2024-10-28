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
  	history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router