import axios from 'axios';
import mockAdapter from 'axios-mock-adapter';

import productsList from './mocks/products.json';

const mock = new mockAdapter(axios);

mock.onGet("/products").reply(200, {
    products: productsList
})

// using a mock before creating an api

