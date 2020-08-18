<template>
  <div :class="className">
    <a
      href="/"
      class="header__icon sidebar-trigger"
      :data-sidebar="sidebar"
      :data-badge="badge"
    >
      <span class="material-icons">{{ iconName }}</span>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ButtonIcon extends Vue {
  // adding '!' tells to typescript to 'relax' cause someone else is going to assign this property a value
  @Prop({ required: true, type: String }) className!: string;
  @Prop({ required: true, type: String }) sidebar!: string;
  @Prop({ type: String }) badge!: string;
  @Prop({ required: true, type: String }) iconName!: string;
}
</script>

<style scoped>
.header__icon .sidebar-trigger {
  cursor: pointer;
}
</style>
