import Vue from "vue";
import Vuex from "vuex";

import sidebarState from "./modules/sidebar-state";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  modules: {
    sidebarState
  }
});

export default store;
