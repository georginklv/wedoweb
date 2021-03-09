import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import './registerServiceWorker';
import VueAnalytics from 'vue-analytics';
import VueMeta from 'vue-meta';
import VueHead from 'vue-head';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

//Meta
Vue.use(VueMeta);
Vue.use(VueHead);

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
	id: 'G-T4PFZ49677',
	router,
});

Vue.config.productionTip = false;

new Vue({
	created() {
		AOS.init();
	},
	router,
	vuetify,
	render: (h) => h(App),
}).$mount('#app');
