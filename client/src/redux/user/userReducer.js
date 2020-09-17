import { UserActionTypes } from './userActions'

const INITIAL = {
    currentUser: '',
    orders: []
}

const UserReducer = (state = INITIAL, action) => {
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case UserActionTypes.ADD_ORDER:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    orders: [...state.currentUser.orders, ...action.payload]
                }
            }
        default:
            return state
    }
}

export default UserReducer;