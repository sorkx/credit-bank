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
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
		  return new Promise((resolve) => {
			setTimeout(() => {
			  resolve({
				el: to.hash,
				behavior: 'smooth'
			  })
			}, 100)
		  })
		}
	  }
})

export default router