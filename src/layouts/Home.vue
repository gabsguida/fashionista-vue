<template>
  <div>
    <p>Home</p>
    <vs-button>Click me!</vs-button>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>
