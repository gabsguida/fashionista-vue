<template>
  <nav class="menu__nav" data-testid="menu">
    <ul v-for="(links, index) in menuLinks" :key="index">
      <li>
        <router-link :to="links.url">{{ links.title }}</router-link>
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
