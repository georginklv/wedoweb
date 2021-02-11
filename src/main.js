import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import './registerServiceWorker';
import VueAnalytics from 'vue-analytics';
import VueMeta from 'vue-meta';

//Meta
Vue.use(VueMeta);

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
	id: 'G-T4PFZ49677',
	router,
});

Vue.config.productionTip = false;

new Vue({
	router,
	vuetify,
	render: (h) => h(App),
}).$mount('#app');
