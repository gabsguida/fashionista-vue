<template>
  <div class="card__container">
    <div class="card__thumb">
      <template v-if="isOnSale">
        <span class="card__thumb-promotion">{{ discountPercentage }}</span>
      </template>
      <img
        class="card__thumb-img"
        src="../../assets/images/teste.jpg"
        alt="Teste"
      />
      <div class="card__thumb-img-actions">
        <vs-button
          class="card__thumb-img-action-heart"
          size="mini"
          icon
          color="danger"
          :active="active == 2"
          @click="active = 2"
          animation-type="rotate"
        >
          <span class="material-icons">favorite_border</span>
          <template #animate>
            <span class="material-icons">favorite</span>
          </template>
        </vs-button>
      </div>
    </div>
    <div class="card__details">
      <div class="card__details-prices">
        <template v-if="isOnSale === true">
          <span class="card__info-field card__info-field--regular-price">
            De <span>{{ productRegularPrice }}</span>
          </span>
          <span class="card__info-field card__info-field--actual-price-red">
            Por <span>{{ productPriceSale }}</span>
          </span>
        </template>
        <template v-else>
          <span class="card__info-field card__info-field--regular-price">
            {{ productRegularPrice }} preço
          </span>
        </template>
      </div>
      <div class="card__details-title">
        <p>{{ productName }} Nome do Produto</p>
      </div>
      <div class="card__details-btn">
        <vs-button
          class="card__card__details-btn"
          block
          color="#b99646"
          gradient
          :active="active == 6"
          @click="active = 6"
        >
          <span>Detalhes</span>
        </vs-button>
      </div>
      <slot name="itemsDetails"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class CustomCard extends Vue {
  @Prop({ required: true, type: String }) productName!: string;
  @Prop({ required: true, type: String }) productImg!: string;
  @Prop({ required: true, type: String }) productImgAlt!: string;
  @Prop({ required: true, type: String }) productPrice!: string;
  @Prop({ type: String }) productPriceSale!: string;
  @Prop({ required: true, type: String }) productRegularPrice!: string;
  @Prop({ type: Boolean }) isOnSale!: boolean;

  private colorBtnDetails = "rgba(var(--vs-primary), 1)";
}
</script>

<style lang="scss" scoped>
.card__container {
  width: 100%;
  position: relative;
  border-radius: 5%;
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
}

.card__thumb {
  display: flex;
}

.card__thumb-img {
  width: 100%;
}

.card__thumb-img-actions {
  position: absolute;
}

.card__details {
  .card__details-prices {
    display: flex;
    justify-content: flex-end;
    padding: 2px 5px;
  }

  .card__details-btn {
    ::v-deep .vs-button {
      margin: 0 !important;
    }
  }
}
</style>
