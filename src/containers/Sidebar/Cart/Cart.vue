<template>
  <div class="cart__products-container">
    <template v-if="cartProducts.length > 0">
      <div class="cart__product-cart custom-scrollbar">
        <div v-for="(cartProduct, index) in cartProducts" :key="index"></div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Cart extends Vue {
  private cartProducts: Array<object> = [{}];
}
</script>
