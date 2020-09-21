<template>
  <div class="card__container">
    <div class="card__thumb">
      <template v-if="isOnSale === true">
        <span class="card__thumb-promotion">{{ discountPercentage }}</span>
      </template>
      <img class="card__thumb-img" :src="productImg" :alt="productName" />
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
      <div class="card__details-prices card-details-prices-promotion">
        <template v-if="isOnSale === true">
          <span class="card__details--regular-price">
            {{ productRegularPrice }}
          </span>
          <span class="card__details--actual-price-red">
            {{ productPriceSale }}
          </span>
        </template>
        <template v-else>
          <span class="card__details-prices">
            {{ productRegularPrice }}
          </span>
        </template>
      </div>
      <div class="card__details-title">
        <p>{{ productName }}</p>
      </div>
      <div class="card__details-btn">
        <vs-button
          class="card__card__details-btn"
          block
          color="#b99646"
          size="large"
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
  @Prop({ type: String }) discountPercentage!: string;
  @Prop({ required: true, type: String }) productName!: string;
  @Prop({ required: true, type: String }) productImg!: string;
  @Prop({ type: String }) productPriceSale!: string;
  @Prop({ required: true, type: String }) productRegularPrice!: string;
  @Prop({ type: Boolean, default: false }) isOnSale!: boolean;

  private active = 0;
}
</script>

<style lang="scss" scoped>
.card__container {
  width: 230px;
  position: relative;
  border-radius: 8px;
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
  margin: 10px auto;
}

.card__thumb {
  display: flex;
}

.card__thumb-promotion {
  display: none;
}

.card__thumb-img {
  width: 100%;
  border-radius: 8px 8px 0 0;
}

.card__thumb-img-actions {
  position: absolute;

  span {
    font-size: 20px;
  }

  .vs-button {
    width: 30px !important;
    height: 30px !important;
  }
}

.card__details {
  .card__details-prices.card-details-prices-promotion {
    display: flex;
    flex-direction: column;
    padding: 5px;
    font-weight: 600;
    font-size: 0.9rem;

    span {
      align-self: flex-end;
    }

    .card__details--regular-price {
      text-decoration: line-through;
    }

    .card__details--actual-price-red {
      color: #e22424;
      font-size: 1rem;
    }
  }

  .card__details-title {
    display: flex;
    justify-content: center;
    font-weight: 600;
  }

  .card__details-btn {
    ::v-deep .vs-button {
      margin: 0 !important;
      border-radius: 8px !important;
    }
  }
}
</style>
