import Vue from 'vue';
import App from './App.vue';
//import VueRouter from 'vue-router';
import router from '@/routes/index.js';

import vuetify from './plugins/vuetify';
import VueTextareaAutoSize from 'vue-textarea-autosize';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { store } from './store/index';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

//Vue.use(VueTextareaAutoSize);
Vue.prototype.$axios = axios;

Vue.config.productionTip = true;
Vue.use(VueTextareaAutoSize);

const firebaseConfig = {
  apiKey: 'AIzaSyCCvHD3yaNS-UXKmddWQpaCrLVcy7EVYsY',
  authDomain: 'vue-calendar-1416e.firebaseapp.com',
  projectId: 'vue-calendar-1416e',
  storageBucket: 'vue-calendar-1416e.appspot.com',
  messagingSenderId: '918735964889',
  appId: '1:918735964889:web:a4f0ae637984bbc414ccc8',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

new Vue({
  render: h => h(App),
  vuetify,
  router,
  store,
}).$mount('#app');
