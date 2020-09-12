import React from 'react'

import CartItem from '../cartItem/cartItem'

import { GlobalContainer } from './cartStyles'

const Cart = ({cart}) => {
    return(
        <GlobalContainer>
            {
                cart.length > 0 ? cart.map(item => <CartItem item={item} />) : <p style={{textAlign: 'center', margin: '30px 0'}} >Cart is Empty</p>
            }
        </GlobalContainer>
    )
}


export default Cart