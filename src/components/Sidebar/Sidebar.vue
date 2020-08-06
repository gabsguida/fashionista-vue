<template>
    <div class="sidebar__content">
        <div :class="[className, (isRight ? 'sidebar--right' : '')]" class="sidebar" data-testid="sidebar">
            <div class="sidebar__header">
                <span class="sidebar__header-title">{{ title }}</span>
                
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Sidebar extends Vue {
  // adding '!' tells to typescript to 'relax' cause someone else is going to assign this property a value
  @Prop({ required: true, type: Boolean, default: false }) isRight!: boolean;
  @Prop({ required: true, type: String, default: "" }) className!: string;
  @Prop({ required: true, type: String, default: "" }) title!: string;
}
</script>
