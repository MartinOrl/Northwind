import React, { useState } from 'react'

import cart from '../../assets/shopping-cart.svg'

import { Container, Icon, Count, IconHolder } from './cartIconStyles'

import Cart from '../cart/cart'

const CartIcon = () => {
    const [visible, setVisible] = useState(false)

    return(
        <Container>
            <IconHolder onClick={()=> setVisible(!visible)}>
                <Icon src={cart}/>
                <Count>4</Count>
            </IconHolder>
            {
                visible ? <Cart /> : null
            }
        </Container>
    )
}

export default CartIcon