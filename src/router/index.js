import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: require('../views/Home.vue').default,
	},
	{
		path: '/portfolio',
		name: 'Portfolio',
		component: require('../views/Portfolio.vue').default,
	},
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

export default router;
