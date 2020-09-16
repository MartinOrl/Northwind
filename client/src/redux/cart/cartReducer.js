import { CartActionTypes } from './cartActions'

import { addItemToCart, removeItemFromCart } from './cartUtils'

const INITIAL = {
    cartItems: []
}

const CartReducer = (state=INITIAL, action) => {

    switch(action.type){
        case CartActionTypes.CART_ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CART_CLEAR_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case CartActionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }

        default:
            return state
    }
}

export default CartReducer