<template>
  <Sidebar
    title="Busca"
    :isRight="true"
    :isSidebarOpen="isSidebarOpen"
    :closeSidebar="closeSidebar"
  >
    <div className="products__search-container">
      <div className="products__search-field">
        <vs-input
          type="text"
          placeholder="O que você procura?"
          className="products__input-search"
          v-model="searchValue"
          loading
        />
      </div>
      <div className="products__search-results custom-scrollbar">
        <div className="products__search-results-card">
          {{ searchValue }}
        </div>
      </div>
    </div>
  </Sidebar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import SidebarSearch from "@/store/modules/sidebar-search";

import Sidebar from "@/components/Sidebar/Sidebar.vue";

@Component({
  components: {
    Sidebar
  }
})
export default class Search extends Vue {
  private searchValue = "";

  public closeSidebar(): void {
    const sidebarState = getModule(SidebarSearch, this.$store);
    return sidebarState.closeSidebarSearch();
  }

  public openSidebar(): void {
    const sidebarState = getModule(SidebarSearch, this.$store);
    return sidebarState.showSidebarSearch();
  }

  get isSidebarOpen(): boolean {
    const sidebarState = getModule(SidebarSearch, this.$store);
    return sidebarState.getSidebarSearchStatus;
  }
}
</script>

<style lang="scss" scoped>
.products__search-container {
  display: flex;
  flex-direction: column;
  padding: 0 20px 0 12px;
  max-height: calc(100vh - 5rem);
}

.products__search-field {
  padding: 10px 0 10px 8px;
  flex-grow: 1;
}

.products__input-search {
  width: 100%;
  height: 40px;
  padding-left: 5px;
  border: 2px solid #bba779;
  outline: none;
}

.products__input-search:focus {
  border: 2px solid #b99646;
}

.products__search-results {
  overflow-y: auto;
  flex-grow: 2;
}

.products__search-results .card__container {
  margin-left: 8px;
}

.products__search-results-card {
  margin-bottom: 15px;
}

.products__search-results-card:last-child {
  margin-bottom: 0;
}
</style>
