export const library = {
    addToCart: (state, action) => {
        let newState;
        const newCart = [...state.cart]
        let flag = false;
        newCart.forEach(
            (data, index) => {
                if (data.id === action.payload) {
                    flag = true
                    newCart[index].qty = newCart[index].qty + 1;
                    newCart[index].total = newCart[index].total + action.price;
                }
            }
        )
        if (flag === false) {
            newCart.push({
                id: action.payload,
                qty: 1,
                total: action.price
            })
        }
        newState = {
            ...state,
            total: state.total + 1,
            amount: action.price + state.amount,
            cart: newCart
        }
        return newState;
    },
    addToWish: (state, action) => {
        let newState;
        const newWish = [...state.wish]
        let flag = false;
        newWish.forEach(
            (id) => {
                if (id === action.payload) {
                    flag = true
                }
            }
        )
        if (flag === false) {
            newWish.push(action.payload)
        }
        newState = {
            ...state,
            wish: newWish
        }
        return newState;
    }
}