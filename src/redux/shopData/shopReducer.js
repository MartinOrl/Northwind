import { ShopActionTypes } from './shopActions'

const INITIAL = {
    items: [],
    hotDeals: []
}

const ShopReducer = (state = INITIAL, action) => {
    switch(action.type){
        case ShopActionTypes.ADD_ITEM:
            if(Array.isArray(action.payload)){
                return {
                    ...state,
                    items: [...action.payload]
                }
            }
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case ShopActionTypes.ADD_HOT_DEALS:
            return {
                ...state,
                hotDeals: [...action.payload]
            }
        default:
            return state
    }
}

export default ShopReducer