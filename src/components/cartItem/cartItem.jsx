import React from 'react'
import { connect } from 'react-redux'


import { GlobalContainer,ItemContainer, Image, Container, AssetContainer, Title, Price, Button } from './cartItemStyles'

import { ClearFromCart } from '../../redux/cart/cartActions'

const CartItem = ({item, clearItem}) => {
    const {name, quantity, ppi } = item
    return(
        <GlobalContainer>
            <ItemContainer>
                <Container>
                    <Image />
                </Container>
                <Container style={{marginRight: '16px'}}>
                    <Title>{name}</Title>
                    <Price>{(ppi * quantity).toFixed(2)}$</Price>
                </Container>
                <AssetContainer>
                    <Button onClick={() => clearItem(item)} >X</Button>
                </AssetContainer>
            </ItemContainer>
        </GlobalContainer>
    )
}

const mapDispatch = dispatch => ({
    clearItem: item => dispatch(ClearFromCart(item))
})

export default connect(null, mapDispatch)(React.memo(CartItem));