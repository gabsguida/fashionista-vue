import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

@Module({ namespaced: true, name: 'SidebarState'})

export default class SidebarState extends VuexModule {
    isSidebarOpen = false

    @Mutation
    public changeSidebarStatus(newState: boolean): any {
        this.isSidebarOpen = newState;
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
    public toggleSidebar(): any {
        this.context.commit('changeSidebarStatus', !this.isSidebarOpen)
    }

    get getSidebarStatus() {
        return this.isSidebarOpen
    }
}