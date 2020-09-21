<template>
  <div class="container">
    <Navbar />
    <div class="container__body">
      <main>
        <transition name="fade" mode="out-in">
          <router-view :key="$route.path"></router-view>
        </transition>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/containers/Navbar/Navbar.vue";

@Component({
  components: { Navbar }
})
export default class TheContainer extends Vue {}
</script>
