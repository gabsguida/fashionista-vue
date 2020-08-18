<template>
  <header class="header" data-testid="header">
    <div class="header__container">
      <ButtonIcon
        iconName="menu"
        sidebar=".menu__container"
        className="header__hamburguer"
      />
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
            sidebar=".search__container"
          />
          <ButtonIcon
            className="header__actions-cart"
            iconName="shopping_cart"
            sidebar=".cart__container"
            badge="1"
          />
          <ButtonIcon
            className="header__actions-account"
            iconName="account_circle"
            sidebar=".account__container"
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

.header__icon {
  font-size: 2rem;
  padding: 5px 10px 10px;
  position: relative;
  height: 40px;
  display: inline-block;
}

.header__actions-cart {
  position: relative;
}

.header__icon[data-badge]:not([data-badge="0"]):before {
  content: attr(data-badge);
  display: inline-block;
  height: 5px;
  background: #b99646;
  position: absolute;
  top: 2px;
  font-size: 0.9rem;
  padding: 8px;
  border-radius: 50%;
  min-width: 6px;
  line-height: 0.4rem;
  text-align: center;
  color: white;
  right: 3px;
  z-index: 5;
}

.header__actions-list {
  display: flex;
  justify-content: space-between;
}
</style>
