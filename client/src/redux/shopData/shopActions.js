export const ShopActionTypes = {
    ADD_ITEM: 'ADD_ITEM',
    ADD_HOT_DEALS: 'ADD_HOT_DEALS'
}

export const AddItem = item => ({
    type: ShopActionTypes.ADD_ITEM,
    payload: item
})

export const AddHotDeals = deals => ({
    type: ShopActionTypes.ADD_HOT_DEALS,
    payload: deals
})