export const UserActionTypes = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
    ADD_ORDER: 'ADD_ORDER'
}

export const SetCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

export const AddOrder = order => ({
    type: UserActionTypes.ADD_ORDER,
    payload: order
})