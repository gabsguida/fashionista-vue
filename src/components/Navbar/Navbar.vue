<template>
  <header class="header">
    <div class="header__container">
      <ButtonIcon
        iconName="menu"
        className="header__hamburguer"
        :toggle="toggleMenu"
      />
      <Menu />
      <div class="header__logo">
        <a to="/" title="Ir para a página inicial">
          <img
            src="../../assets/images/Logo.png"
            alt="Fashionista"
            class="header__logo-img"
          />
        </a>
      </div>
      <div class="header__actions">
        <div class="header__actions-list">
          <ButtonIcon
            className="header__actions-search"
            iconName="search"
            :toggle="toggleSearch"
          />
          <Search />
          <ButtonIcon
            className="header__actions-cart"
            iconName="shopping_cart"
            badge="1"
            toggle=""
          />
          <ButtonIcon
            className="header__actions-account"
            iconName="account_circle"
            toggle=""
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import SidebarMenu from "../../store/modules/sidebar-state";
import SidebarSearch from "../../store/modules/sidebar-search";

import ButtonIcon from "./ButtonIcon.vue";
import Menu from "@/components/Menu/Menu.vue";
import Search from "@/components/Search/Search.vue";

@Component({
  components: {
    ButtonIcon,
    Menu,
    Search
  }
})
export default class Navbar extends Vue {
  private toggleMenu(): void {
    const sidebarState = getModule(SidebarMenu, this.$store);
    return sidebarState.toggleSidebarMenu();
  }

  private toggleSearch(): void {
    const sidebarState = getModule(SidebarSearch, this.$store);
    return sidebarState.toggleSidebarSearch();
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #ffffff;
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 60px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
}

.header__logo-img {
  display: block;
  min-width: 150px;
  width: 80%;
  cursor: pointer;
}

.header__actions-cart {
  position: relative;
}

.header__actions-list {
  display: flex;
  justify-content: space-between;
}
</style>
