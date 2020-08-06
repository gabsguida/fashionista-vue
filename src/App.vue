<template>
  <div>
    <Home />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Home from "./layouts/Home.vue";

export default Vue.extend({
  name: "App",
  components: {
    Home
  }
});
</script>
