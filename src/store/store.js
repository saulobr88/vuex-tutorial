import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true, // just change values using mutations
    state: {
        products: [
            {name: 'Banana Skin', price: 20},
            {name: 'Shiny Star', price: 40},
            {name: 'Green Shells', price: 60},
            {name: 'Red Shells', price: 80}
        ]
    },
    getters: {
        saleProducts: (state) => {
            var saleProducts = state.products.map( product => {
                return {
                    name:  '**' + product.name + '**',
                    price: product.price / 2,
                };
            });
            return saleProducts;
        }
    },
    /*
    * Using Vue.Js DevTools in Google Chrome to see the history of changes
    */
    mutations: {
        reducePrice: (state, payload) => {
            state.products.forEach( product => {
                product.price -= payload //payload: The amount to reduce
            });
        }
    },
    actions: {
        reducePrice: (context, payload) => {
            setTimeout(function(){ // reach out for data
                context.commit('reducePrice', payload);
            }, 2000); // Wait for 2 seconds before exec mutation
        }
    }
});
