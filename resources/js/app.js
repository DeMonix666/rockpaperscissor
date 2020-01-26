require('./bootstrap');
import Vue from 'vue';

import Routes from '@/js/vue/routes.js';
import App from '@/js/vue/views/App';

const app = new Vue({
    el: '#content',
	router: Routes,
	render: h => h(App)
});

export default app;
