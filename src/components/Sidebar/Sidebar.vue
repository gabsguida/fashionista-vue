<template>
  <div
    class="sidebar"
    :class="[className, isRight ? 'sidebar--right' : '']"
    v-if="isSidebarOpen"
  >
    <div class="sidebar__header">
      <span class="sidebar__header-title">{{ title }}</span>
      <span
        class="material-icons sidebar__header-close-btn"
        @click="closeSidebar"
      >
        close
      </span>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Sidebar extends Vue {
  // adding '!' tells to typescript to 'relax' cause someone else is going to assign this property a value
  @Prop({ type: String }) className!: string;
  @Prop({ type: Boolean, default: false }) isRight!: boolean;
  @Prop({ required: true, type: String }) title!: string;
  @Prop({ required: true, type: Boolean }) isSidebarOpen!: boolean;
  @Prop({ required: true }) closeSidebar!: void;
}
</script>

<style lang="scss" scoped>
.sidebar {
  background-color: #fff;
  width: 95vw;
  max-width: 420px;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 10px 0px 10px 0px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.sidebar--right {
  right: 0;
  left: auto;
  box-shadow: -10px 0px 10px 0px rgba(0, 0, 0, 0.2);
}

.sidebar__header {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #cfcdcd;
}

.sidebar__header-title,
.sidebar__header-close-btn {
  font-size: 2em;
}

.sidebar__header-close-btn {
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.sidebar--right .sidebar__header-close-btn {
  color: #212121;
}

.sidebar__header-close-btn:hover {
  color: #b99646;
  transition: all 0.2s ease-in-out;
}
</style>
