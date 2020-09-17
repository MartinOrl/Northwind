import { createSelector } from 'reselect'

const UserState = state => state.user;

export const SelectCurrentUser = createSelector(
    [UserState],
    user => user.currentUser
)

export const SelectUserOrders = createSelector(
    [UserState],
    user => user.currentUser.orders
)