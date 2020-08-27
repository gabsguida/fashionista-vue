<template>
  <div class="products__container">
    <CustomCard />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import Products from "@/store/modules/products";

import CustomCard from "@/components/CustomCard/CustomCard.vue";

@Component({
  components: {
    CustomCard
  }
})
export default class ProductsHome extends Vue {
  private productsList = [];

  public getProductsList(): Array<object> {
    const products = getModule(Products, this.$store);
    
  }
}
</script>

<style lang="scss" scoped>
.products__container {
  width: 200px;
  margin: 0 auto;
}
</style>
