import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
//import products from '../../mocks/products.json';

@Module({ namespaced: true, name: 'Products' })

export default class Products extends VuexModule {
    products = [{}];

    @Mutation
    public updateProducts(data: Array<object>): Array<object> {
        return this.products = data;
    }

    @Action
    public getProductsList(): Promise<void> {
        return fetch('../../mocks/products.json')
            .then(response => response.json())
            .then(response => this.context.commit('updateProducts', response || response)
        )
    }

    get productsList(): Array<object>{
        return this.productsList
    }
}