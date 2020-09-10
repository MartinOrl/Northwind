export const CartActionTypes = {
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    CLEAR_FROM_CART: 'CLEAR_FROM_CART'
}

export const AddItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const RemoveItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const ClearFromCart = item => ({
    type: CartActionTypes.CLEAR_FROM_CART,
    payload: item
})