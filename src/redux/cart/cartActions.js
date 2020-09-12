export const CartActionTypes = {
    CART_ADD_ITEM: 'CART_ADD_ITEM',
    CART_REMOVE_ITEM: 'CART_REMOVE_ITEM',
    CART_CLEAR_FROM_CART: 'CART_CLEAR_FROM_CART'
}

export const AddItemToCart = item => ({
    type: CartActionTypes.CART_ADD_ITEM,
    payload: item
})

export const RemoveItemFromCart = item => ({
    type: CartActionTypes.CART_REMOVE_ITEM,
    payload: item
})

export const ClearFromCart = item => ({
    type: CartActionTypes.CART_CLEAR_FROM_CART,
    payload: item
})