import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

@Module({ namespaced: true, name: 'SidebarMenu'})

export default class SidebarMenu extends VuexModule {
    isSidebarMenuOpen = false

    @Mutation
    public changeSidebarStatus(newState: boolean): any {
        this.isSidebarMenuOpen = newState;
    }

    @Action
    public showSidebar(): any {
        this.context.commit('changeSidebarStatus', true)
    }

    @Action
    public closeSidebar(): any {
        this.context.commit('changeSidebarStatus', false)
    }

    @Action
    public toggleSidebarMenu(): any {
        this.context.commit('changeSidebarStatus', !this.isSidebarMenuOpen)
    }

    // getter
    get getSidebarMenuStatus() {
        return this.isSidebarMenuOpen
    }
}