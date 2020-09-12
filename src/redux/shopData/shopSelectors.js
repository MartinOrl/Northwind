import { createSelector } from 'reselect'

const ShopState = state => state.shop;

export const SelectShopItems = createSelector(
    [ShopState],
    shop => shop.items
)

export const SelectHotDeals = createSelector(
    [ShopState],
    shop => shop.hotDeals
)

