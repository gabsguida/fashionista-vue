import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

import router from './router'
import store from "./store";

import Vuesax from "vuesax";
Vue.use(Vuesax);

import "material-icons/iconfont/material-icons.scss"; //Material Icons
import "vuesax/dist/vuesax.css"; // Vuesax
import "./assets/scss/main.scss"; 


Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
