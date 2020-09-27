import React from 'react'
import { connect } from 'react-redux'
import { AddItemToCart, RemoveItemFromCart, ClearFromCart } from '../../redux/cart/cartActions'

import { GlobalContainer, Image, ItemInfo, Title, QuantityContainer, Quantity, Button, Separator, Price } from './checkoutItemStyles'

const CheckoutItem = ({item, addItem, removeItem, clearItem }) => {
    const { name, price, imgUrl, quantity } = item

    return(
        <div>
            <GlobalContainer>
                <Image src={imgUrl} />
                <ItemInfo>
                    <Title>{name}</Title>
                </ItemInfo>
                <QuantityContainer>
                    <Button onClick={() => removeItem(item)} >&lt;</Button>
                    <Quantity>{quantity}</Quantity>
                    <Button onClick={() => addItem(item)} >&gt;</Button>
                </QuantityContainer>
                <Price>{parseFloat((price*quantity)).toFixed(2)} $</Price>
                <Button onClick={() => clearItem(item)} >Remove</Button>
            </GlobalContainer>
            <Separator />
        </div>
    )
}

const mapDispatch = dispatch => ({
    addItem: item => dispatch(AddItemToCart(item)),
    removeItem: item => dispatch(RemoveItemFromCart(item)),
    clearItem: item => dispatch(ClearFromCart(item))
})

export default connect(null, mapDispatch)(CheckoutItem)