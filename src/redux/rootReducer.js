import { combineReducers } from 'redux'

import CartReducer from './cart/cartReducer'

const rootReducer = combineReducers({
    cart: CartReducer
})


export default rootReducer