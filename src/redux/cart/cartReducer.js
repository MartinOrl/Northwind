import { CartActionTypes } from './cartActions'

import { addItemToCart, removeItemFromCart } from './cartUtils'

const INITIAL = {
    cartItems: [
        {
            id: 13548,
            name: 'Razer Blade 15',
            description: 'Notebook',
            quantity: '2',
            ppi: 1450.99,
            rating: 4.8
        },
        {
            id: 23456,
            name: 'Lenovo Legion',
            description: 'Gaming Notebook',
            quantity: '1',
            ppi: 980.20,
            rating: 4.5
        },
        {
            id: 65789,
            name: 'MS Surface Duo',
            description: 'Nobody wants that',
            quantity: '3',
            ppi: 1240.50,
            rating: 4.2
        },
]
}

const CartReducer = (state=INITIAL, action) => {

    switch(action.type){
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }

        default:
            return state
    }
}

export default CartReducer