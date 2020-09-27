<template>
  <div class="products__home">
    <h2 class="products__home-title">Nossos Produtos</h2>
    <div class="products__container">
      <div
        v-for="(product, index) in productsList"
        :key="index"
        class="product__container"
      >
        <CustomCard
          :key="index"
          :productName="product.name"
          :productImg="product.image"
          :productPriceSale="product.actual_price"
          :productRegularPrice="product.regular_price"
          :isOnSale="product.on_sale"
          :discountPercentage="product.discount_percentage"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
//import { getModule } from "vuex-module-decorators";
//import Products from "@/store/modules/products";

import products from "@/assets/mocks/products.json";

import CustomCard from "@/components/CustomCard/CustomCard.vue";

@Component({
  components: {
    CustomCard
  }
})
export default class ProductsHome extends Vue {
  // using mock
  private productsList = products;
}
</script>

<style lang="scss" scoped>
// defining a global mixin
@mixin globalbreak($screen) {
  @media (min-width: $screen+"px") {
    @content;
  }
}

.products__home-title {
  margin: 0;
  padding: 10px 5px;

  @include globalbreak(768) {
    padding: 10px 12px;
  }
}

.products__container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;

  @include globalbreak(768) {
    grid-template-columns: repeat(3, minmax(200px, auto));
    display: grid;
    gap: 20px;
  }

  @include globalbreak(1024) {
    grid-template-columns: repeat(4, minmax(200px, auto));
    gap: 15px;
  }

  @include globalbreak(1440) {
    grid-template-columns: repeat(5, minmax(200px, auto));
    gap: 50px;
  }
}
</style>
