import Vue from 'vue';
import App from './App.vue';

//Register BootstrapVue
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);

import router from './routes/routes';
import i18n from './plugins/i18n';

//import { NONE, ALL } from 'leaflet-freedraw';
Vue.config.productionTip = false;

new Vue({
	i18n,
	router,
	render: (h) => h(App),
}).$mount('#app');
