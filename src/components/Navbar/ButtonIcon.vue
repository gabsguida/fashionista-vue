<template>
  <div :class="className" @click.prevent="toggle" :data-badge="badge">
    <span class="material-icons header__icon">{{ iconName }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import sidebarState from "../../store/modules/sidebar-state";

@Component
export default class ButtonIcon extends Vue {
  // adding '!' tells to typescript to 'relax' cause someone else is going to assign this property a value
  @Prop({ required: true, type: String }) className!: string;
  @Prop({ type: String }) badge!: string;
  @Prop({ required: true, type: String }) iconName!: string;

  //chamar o getModule
  private toggle(): boolean {
    const sidebarStateToggle = getModule(sidebarState, this.$store);
    return sidebarStateToggle.setToggleSidebar(true);
  }
}
</script>

<style scoped>
.header__icon {
  font-size: 2rem;
  padding: 5px 10px 10px;
  position: relative;
  height: 40px;
  display: inline-block;
  cursor: pointer;
}

.header__icon[data-badge]:not([data-badge="0"]):before {
  content: attr(data-badge);
  display: inline-block;
  height: 5px;
  background: #b99646;
  position: absolute;
  top: 2px;
  font-size: 0.9rem;
  padding: 8px;
  border-radius: 50%;
  min-width: 6px;
  line-height: 0.4rem;
  text-align: center;
  color: white;
  right: 3px;
  z-index: 5;
}
</style>
