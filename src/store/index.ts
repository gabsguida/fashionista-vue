import Vue from "vue";
import Vuex from "vuex";

import SidebarState from "./modules/sidebar-state";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  modules: {
    SidebarState
  }
});

export default store;
