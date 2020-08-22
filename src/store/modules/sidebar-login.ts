import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

@Module({ namespaced: true, name: 'SidebarLogin'})

export default class SidebarLogin extends VuexModule {
    isSidebarLoginOpen = false

    @Mutation
    public changeSidebarStatus(newState: boolean): any {
        this.isSidebarLoginOpen = newState;
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
    public toggleSidebarLogin(): any {
        this.context.commit('changeSidebarStatus', !this.isSidebarLoginOpen)
    }

    // getter
    get getSidebarLoginStatus() {
        return this.isSidebarLoginOpen
    }
}