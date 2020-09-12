export const ShopActionTypes = {
    ADD_ITEM: 'ADD_ITEM'
}

export const AddItem = item => ({
    type: ShopActionTypes.ADD_ITEM,
    payload: item
})