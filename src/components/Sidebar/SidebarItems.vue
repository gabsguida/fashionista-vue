<template>
  <div class="Sidebar__containers">
    <Sidebar className="menu__container" title="Menu">
      <Menu />
    </Sidebar>
    <Sidebar className="search__container" title="Busca" isRight="true">
      <p>Busca</p>
    </Sidebar>
    <Sidebar className="cart__container" title="Carrinho" isRight="true">
      <p>Carrinho</p>
    </Sidebar>
    <Sidebar className="account__container" title="Login" isRight="true">
      <p>Login</p>
    </Sidebar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import Menu from "@/components/Menu/Menu.vue";

@Component({
  components: {
    Sidebar,
    Menu
  }
})
export default class SidebarItems extends Vue {}
</script>
