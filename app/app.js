import './assets/scss/styles.scss';
import Vue from 'vue';
import router from './router';

import axios from 'axios';
import VueAxios from 'vue-axios';
import moment from 'vue-moment';
 
Vue.use(VueAxios, axios);
new Vue({ router: router }).$mount('#root');