<template>
  <div class="products__container">
    <template v-for="(product, index) in productsList">
      <CustomCard
        :key="index"
        :productName="product.name"
        :productImg="product.image"
        :productPriceSale="product.actual_price"
        :productRegularPrice="product.regular_price"
        :isOnSale="product.on_sale"
        :discountPercentage="product.discount_percentage"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
//import { getModule } from "vuex-module-decorators";
//import Products from "@/store/modules/products";

import products from "../../mocks/products.json";

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
