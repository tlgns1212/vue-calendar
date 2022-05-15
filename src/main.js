import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutoSize from "vue-textarea-autosize";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

Vue.use(VueTextareaAutoSize);

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyCCvHD3yaNS-UXKmddWQpaCrLVcy7EVYsY",
  authDomain: "vue-calendar-1416e.firebaseapp.com",
  projectId: "vue-calendar-1416e",
  storageBucket: "vue-calendar-1416e.appspot.com",
  messagingSenderId: "918735964889",
  appId: "1:918735964889:web:a4f0ae637984bbc414ccc8",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
