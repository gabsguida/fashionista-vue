import Vue from "vue";
import Vuex from "vuex";

import SidebarMenu from "./modules/sidebar-state";
import SidebarSearch from "./modules/sidebar-search";
import SidebarCart from "./modules/sidebar-cart";
import SidebarLogin from "./modules/sidebar-login";
import Products from "./modules/products";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  modules: {
    SidebarMenu,
    SidebarSearch,
    SidebarCart,
    SidebarLogin,
    Products
  }
});

export default store;
