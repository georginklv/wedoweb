import Vue from 'vue';
import VueRouter from 'vue-router';
import storeBlogs from '@/data/storeBlogs';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
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
		{
			path: '/blog',
			name: 'Blog',
			component: require('../views/allBlogs.vue').default,
		},
		{
			path: '/blog/:slug',
			name: 'BlogDetails',
			props: true,
			component: () =>
				import(
					/* webpackChunkName: "DestinationDetails"*/ '../views/BlogPage.vue'
				),
			beforeEnter: (to, from, next) => {
				const exists = storeBlogs.blogs.find(
					(blog) => blog.slug === to.params.slug,
				);
				if (exists) {
					next();
				} else {
					next({ name: 'notFound' });
				}
			},
		},
		{
			path: '/contacts',
			name: 'Contacts',
			component: require('../views/Contacts.vue').default,
		},
	],
});

export default router;
