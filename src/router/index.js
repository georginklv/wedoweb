import Vue from 'vue';
import VueRouter from 'vue-router';
import storeBlogs from '@/data/storeBlogs';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			const position = {};
			if (to.hash) {
				position.selector = to.hash;
				if (to.hash === '#experience') {
					position.offset = { y: 140 };
				}
				if (document.querySelector(to.hash)) {
					return position;
				}

				return false;
			}
		}
	},
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
			component: require('../views/BlogPage.vue').default,
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
		{
			path: '/404',
			alias: '*',
			name: 'notFound',
			component: require('../views/NotFound').default,
		},
	],
});

export default router;
