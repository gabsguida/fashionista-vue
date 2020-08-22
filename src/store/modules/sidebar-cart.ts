import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

@Module({ namespaced: true, name: 'SidebarCart'})

export default class SidebarCart extends VuexModule {
    isSidebarCartOpen = false

    @Mutation
    public changeSidebarStatus(newState: boolean): any {
        this.isSidebarCartOpen = newState;
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
    public toggleSidebarCart(): any {
        this.context.commit('changeSidebarStatus', !this.isSidebarCartOpen)
    }

    // getter
    get getSidebarCartStatus() {
        return this.isSidebarCartOpen
    }
}