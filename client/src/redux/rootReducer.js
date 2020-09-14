import { combineReducers } from 'redux'

import CartReducer from './cart/cartReducer'
import ShopReducer from './shopData/shopReducer'

const rootReducer = combineReducers({
    cart: CartReducer,
    shop: ShopReducer
})


export default rootReducer