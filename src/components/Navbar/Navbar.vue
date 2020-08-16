<template>
  <div>
    <vs-navbar v-model="active">
      <template #left>
        <div className="header__logo">
          <router-link to="/" title="Ir para a página inicial">
            <img
              src="img/Logo.png"
              alt="Fashionista"
              className="header__logo-img"
            />
          </router-link>
        </div>
      </template>
    </vs-navbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

</script>
