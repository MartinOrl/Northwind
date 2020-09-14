import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Title, LinkButton } from './checkoutStyles'

import { selectCartItems } from '../../redux/cart/cartSelectors'

import CheckoutItem from '../../components/checkout-item/checkoutItem'

const EmptyCart = () => {

    return(
        <div style={{textAlign: 'center'}}>
            <Title>Your cart is empty</Title>
            <LinkButton to='/'>Go to Shop</LinkButton>
        </div>
    )
}


const Checkout = ({cart}) => {

    return(
        <div style={{margin: '0 auto', width: '90%'}}>
            <Title>Checkout</Title>
            {
                cart.length > 0 ? 
                cart.map(item => <CheckoutItem item={item} />) 
                : <EmptyCart />
            }
        </div>
    )
}

const mapState = createStructuredSelector({
    cart: selectCartItems
})

export default connect(mapState)(Checkout);