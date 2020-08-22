import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

@Module({ namespaced: true, name: 'SidebarSearch'})

export default class SidebarSearch extends VuexModule {
    isSidebarSearchOpen = false

    @Mutation
    public changeSidebarStatus(newState: boolean): any {
        this.isSidebarSearchOpen = newState;
    }

    @Action
    public showSidebarSearch(): any {
        this.context.commit('changeSidebarStatus', true)
    }

    @Action
    public closeSidebarSearch(): any {
        this.context.commit('changeSidebarStatus', false)
    }

    @Action
    public toggleSidebarSearch(): any {
        this.context.commit('changeSidebarStatus', !this.isSidebarSearchOpen)
    }

    // getter
    get getSidebarSearchStatus() {
        return this.isSidebarSearchOpen
    }
}