import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueFullPage from 'vue-fullpage.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import JsonViewer from 'vue-json-viewer';

import './assets/print.css';

import VueClipboard from 'vue-clipboard2';
import App from './App.vue';

Vue.use(JsonViewer);

Vue.use(VueClipboard);

library.add(faCoffee);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueFullPage);

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
