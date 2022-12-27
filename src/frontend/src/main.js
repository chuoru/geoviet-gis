import Vue from 'vue';
import App from './App.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faExpand, faCircleInfo, faHand, faMagnifyingGlassMinus, faMagnifyingGlassPlus, faDrawPolygon, faRulerHorizontal, faPrint, faBook, faTrashCan } from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add( faExpand, faCircleInfo, faHand, faMagnifyingGlassMinus, faMagnifyingGlassPlus, faDrawPolygon, faRulerHorizontal, faPrint, faBook, faTrashCan)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


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
