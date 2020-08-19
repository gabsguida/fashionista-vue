import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

@Module({ namespaced: true, name: 'sidebarState'})

export default class sidebarState extends VuexModule {
    isSidebarOpen = false

    @Mutation
    public toggleSidebar(newState: boolean): any {
        this.isSidebarOpen = newState;
    }

    @Action
    public setToggleSidebar(newState: boolean): any{
        this.context.commit('toggleSidebar', newState)
    }

    get showSidebar() {
        return this.isSidebarOpen
    }
}


/* export default {
    namespaced: true as true,
    state: {
        isSidebarOpen: false
    },

    mutations: {
        toggleSidebar(state: { isSidebarOpen: boolean }, newState: boolean) {
            state.isSidebarOpen = newState
        }
    },

    actions: {
        setToggleSidebar({ commit }: any, data: boolean) {
            commit('toggleSidebar', data);
        }
    },

    getters: {
        showSidebar(state: { isSidebarOpen: boolean }) {
            return state.isSidebarOpen
        }
    }
} */
