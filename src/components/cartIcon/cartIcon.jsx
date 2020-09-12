import React, { useState } from 'react'

import svg from '../../assets/shopping-cart.svg'

import { Container, Icon, Count, IconHolder } from './cartIconStyles'

import Cart from './cart/cart'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cartSelectors'
import { connect } from 'react-redux'

const CartIcon = ({clickable, cart}) => {
    const [visible, setVisible] = useState(false)

    return(
        <Container>
            <IconHolder onClick={()=> setVisible(!visible)}>
                <Icon src={svg}/>
                <Count>{cart.length}</Count>
            </IconHolder>
            {
                visible && clickable ? <Cart cart={cart} /> : null
            }
        </Container>
    )
}

const mapState = createStructuredSelector({
    cart: selectCartItems
})

export default connect(mapState)(CartIcon)