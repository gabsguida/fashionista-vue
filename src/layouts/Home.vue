<template>
  <div class="home__container">
    <Navbar />
    <main>
      <ProductsHome />
    </main>
    <!-- <div>
      <router-view></router-view>
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/layouts/components/Navbar/Navbar.vue";
import ProductsHome from "@/layouts/ProductsHome/ProductsHome.vue";

@Component({
  components: {
    Navbar,
    ProductsHome
  }
})
export default class Home extends Vue {}
</script>
