<template>
  <header class="header">
    <div class="header__container">
      <ButtonIcon iconName="menu" className="header__hamburguer" />
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
          <ButtonIcon className="header__actions-search" iconName="search" />
          <ButtonIcon
            className="header__actions-cart"
            iconName="shopping_cart"
            badge="1"
          />
          <ButtonIcon
            className="header__actions-account"
            iconName="account_circle"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ButtonIcon from "./ButtonIcon.vue";

@Component({
  components: {
    ButtonIcon
  }
})
export default class Navbar extends Vue {}
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
