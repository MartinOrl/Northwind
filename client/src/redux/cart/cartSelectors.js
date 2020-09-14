import { createSelector } from 'reselect'

const CartState = state => state.cart;

export const selectCartItems = createSelector(
    [CartState],
    cart => cart.cartItems
)