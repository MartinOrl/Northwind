import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Title, LinkButton, Price } from './checkoutStyles'

import { selectCartItems } from '../../redux/cart/cartSelectors'

import CheckoutItem from '../../components/checkout-item/checkoutItem'
import StripeCheckoutButton from '../../components/stripeCheckoutButton/stripeCheckoutButton'

const EmptyCart = () => {

    return(
        <div style={{textAlign: 'center'}}>
            <Title>Your cart is empty</Title>
            <LinkButton to='/'>Go to Shop</LinkButton>
        </div>
    )
}

const Checkout = ({cart}) => {
    let total = 0;
    let price = 0;
    cart.map(item => {
        price = item.price*item.quantity
        total += price
        return ''
    })
    total = parseFloat(total).toFixed(2)
    console.log(total)
    return (
        <div style={{margin: '0 auto', width: '90%'}}>
        <div style={{textAlign: 'center', fontSize:'1.2rem'}}>
            <p>Please not this is not a functional cart for this is a demo. Please use credit cart details below for testing &darr;
                <br/>
                4242 4242 4242 4242 - Exp: 1/20 - CVV: 123
            </p>
        </div>
        {
            cart.map(item => <CheckoutItem item={item} />)
        }
        <Price>Total: {total}$</Price>
        <StripeCheckoutButton price={total} />
        </div>
    )
}


const CheckoutPage = ({cart}) => {

    return(
        <div style={{margin: '0 auto 100px auto', width: '90%'}}>
            <Title>Checkout</Title>
            {
                cart.length > 0 ? <Checkout cart={cart} /> : <EmptyCart />
            }
        </div>
    )
}

const mapState = createStructuredSelector({
    cart: selectCartItems
})

export default connect(mapState)(CheckoutPage);