<template>
  <div class="carousel">
    <carousel :per-page="1" :mouse-drag="false">
      <slide>
        Slide 1 Content
      </slide>
      <slide>
        Slide 2 Content
      </slide>
    </carousel>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class Carousel extends Vue {}
</script>
