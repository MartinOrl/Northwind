import React from 'react'

import CartItem from '../cartItem/cartItem'

import { GlobalContainer, Checkout, CartContainer, ButtonContainer } from './cartStyles'

const Cart = ({cart}) => {
    return(
        <GlobalContainer>
            <CartContainer>
            {
                cart.length > 0 ? cart.map(item => <CartItem item={item} />) : <p style={{textAlign: 'center', margin: '30px 0'}} >Cart is Empty</p>
            }
            </CartContainer>
            {
                cart.length > 0 ? <ButtonContainer><Checkout to='/checkout' >Checkout</Checkout></ButtonContainer> : null
            }
        </GlobalContainer>
    )
}


export default Cart