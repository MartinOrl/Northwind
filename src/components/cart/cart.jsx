import React from 'react'
import { connect } from 'react-redux'

import CartItem from '../cartItem/cartItem'

import { selectCartItems } from '../../redux/cart/cartSelectors'
import { createStructuredSelector } from 'reselect'

import { GlobalContainer } from './cartStyles'

const Cart = ({cart}) => {
    console.log(cart.length)
    return(
        <GlobalContainer>
            {
                cart.length > 0 ? cart.map(item => <CartItem item={item} />) : <p style={{textAlign: 'center', margin: '30px 0'}} >Cart is Empty</p>
            }
        </GlobalContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cart: selectCartItems
  })

export default connect(mapStateToProps)(Cart)