import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";

import Vuesax from "vuesax";
import "material-icons/iconfont/material-icons.scss"; //Material Icons
import "vuesax/dist/vuesax.css"; // Vuesax
Vue.use(Vuesax);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
