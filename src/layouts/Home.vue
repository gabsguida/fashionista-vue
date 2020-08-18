<template>
  <div class="home__container">
    <Navbar />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar/Navbar.vue";

@Component({
  components: {
    Navbar
  }
})
export default class Home extends Vue {}
</script>
