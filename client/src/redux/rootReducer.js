import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import CartReducer from './cart/cartReducer'
import ShopReducer from './shopData/shopReducer'

const rootReducer = combineReducers({
    cart: CartReducer,
    shop: ShopReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}


export default persistReducer(persistConfig, rootReducer)