<template>
  <nav class="menu__nav" data-testid="menu">
    <ul v-for="(links, index) in menuLinks" :key="index">
      <li>
        <router-link class="menu__nav-link" :to="links.url">
          {{ links.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Menu extends Vue {
  private menuLinks: Array<object> = [
    {
      url: "/",
      title: "Página Inicial"
    },
    {
      url: "/",
      title: "Promoções"
    },
    {
      url: "/",
      title: "Blusas"
    },
    {
      url: "/",
      title: "Calças"
    },
    {
      url: "/",
      title: "Vestidos"
    }
  ];
}
</script>

<style scoped>
.menu__container {
  background-color: #212121;
  color: #fff;
}

.menu__container .menu__nav ul li .menu__nav-link {
  display: block;
  padding: 15px;
  border-bottom: 1px solid #555;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  color: #fff;
  transition: all 0.2s ease-in-out;
}

.menu__container .menu__nav ul li:first-child .menu__nav-link {
  border-top: 1px solid #555;
}

.menu__container .menu__nav ul li .menu__nav-link:hover {
  color: #b99646;
  transition: all 0.2s ease-in-out;
  padding-left: 25px;
}
</style>
