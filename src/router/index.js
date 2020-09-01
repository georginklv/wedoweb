import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		// component: Home
	},
	// {
	//   path: '/helloworld',
	//   // name: 'HelloWorld',
	//   // // route level code-splitting
	//   // // this generates a separate chunk (about.[hash].js) for this route
	//   // // which is lazy-loaded when the route is visited.
	//   // component: function () {
	//   //   return import(/* webpackChunkName: "helloworld" */ '../components/HelloWorld.vue')
	//   // }
	// }
];

const router = new VueRouter({
	routes,
});

export default router;
