import { products } from "../data/product";
import { actions } from "./actions";
import { library } from './library.js';
const initState = {
    products: products,
    cart: [],
    wish: [],
    total: 0,
    amount: 0
};

export const root = (state = initState, action) => {
    let newState;
    switch (action.type) {
        case actions.ADD_PRODUCT:
            newState = library.addToCart(state, action)
            break;
        case actions.ADD_WISH:
            newState = library.addToWish(state, action)
            break;
        default:
            newState = state
            break;
    }
    return newState;
}