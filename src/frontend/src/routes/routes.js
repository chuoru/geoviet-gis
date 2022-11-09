import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			name: 'Home',
			path: '/home',
			component: () => import('@/views/Home/Home.vue'),
		},
		{
			name: 'Login',
			path: '/login',
			component: () => import('@/views/Login/Login.vue'),
		},
	],
});
