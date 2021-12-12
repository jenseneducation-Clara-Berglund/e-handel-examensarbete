import Vue from "vue";
import Vuex from "vuex";
import { getProducts } from "./api";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [],
        cart: [],
    },
    getters: {
        products(state) {
            return state.products;
        },
        product: (state) => (id) => {
            return state.products.find((item) => item.id == id);
        },
        cart(state) {
            return state.cart;
        },
    },
    mutations: {
        Set_Product(state, products) {
            state.products = products;
        },
    },
    actions: {
        async getProducts(context) {
            try {
                let response = await getProducts();
                context.commit("Set_Product", response.data);
            } catch (e) {
                console.log(e);
            }
        },
    },
});
