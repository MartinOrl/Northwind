import React, { useState } from 'react'

import svg from '../../assets/shopping-cart.svg'

import { Container, Icon, Count, IconHolder } from './cartIconStyles'

import Cart from './cart/cart'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cartSelectors'
import { connect } from 'react-redux'

const CartIcon = ({clickable, cart}) => {
    const [visible, setVisible] = useState(false)
    let count = 0;
    if(cart.length > 0){
        cart.map(item => count += item.quantity)
    }
    return(
        <Container>
            <IconHolder onClick={()=> setVisible(!visible)}>
                <Icon src={svg}/>
                <Count>{count}</Count>
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