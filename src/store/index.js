import Vue from 'vue';
import Vuex from 'vuex';
// import cart from './modules/cart';
// import products from './modules/products';
// import createLogger from '../../../src/plugins/logger';
import map from './modules/map';

Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        map
    },
    strict: false,
    // state: {
    //     view: null,
    //     loader: null
    // },
    // mutations: {
    //     //
    //     view(state, view) {
    //         //
    //         state.view = view;
    //     },
    //     loader(state, loader) {
    //         //
    //         state.loader = loader;
    //     }
    // }

});