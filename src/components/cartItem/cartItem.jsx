import React from 'react'

import { ItemContainer, Image, Container, QuantityOptions, AssetContainer, Button, Title, Description, Rating, Quantity, Price, Separator } from './cartItemStyles'

const CartItem = ({item, addItem, removeItem, clearItem}) => {
    const {name, description, quantity, ppi, rating} = item
    return(
        <div>
            <ItemContainer>
                <Container>
                    <Image />
                </Container>
                <Container>
                    <Title>{name}</Title>
                    <Description>{description}</Description>
                    <Rating>{rating}</Rating>
                </Container>
                <AssetContainer>
                    <QuantityOptions>
                        <Button onClick={() => removeItem(item)} >&lt;</Button>
                        <Quantity>{quantity}</Quantity>
                        <Button onClick={() => addItem(item)} >&gt;</Button>
                    </QuantityOptions>
                    <Price>{(ppi * quantity).toFixed(2)}$</Price>
                    <Button onClick={() => clearItem(item)}>X</Button>
                </AssetContainer>
            </ItemContainer>
            <Separator />
        </div>
    )
}

export default CartItem;