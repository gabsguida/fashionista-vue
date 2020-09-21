<template>
  <div class="home__container">
    <Carousel />
    <ProductsHome />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProductsHome from "@/layouts/ProductsHome/ProductsHome.vue";
import Carousel from "@/layouts/components/Carousel/Carousel.vue";

@Component({
  components: {
    ProductsHome,
    Carousel
  }
})
export default class Home extends Vue {}
</script>
