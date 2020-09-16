import React from 'react'
import { connect } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'

import { AddOrderToDatabase } from '../../redux/cart/cartUtils'

import logo from '../../assets/northwind.svg'
import { ClearCart } from '../../redux/cart/cartActions'


const StripeCheckoutButton = ({price, cart, user, clearCart}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_SZgJwqkCt9AZxnpNWOjVZ8fs00Ox0v4xO2'
    console.log(cart)
    const onToken = token => {
        alert("Payment Succesful")
        AddOrderToDatabase(cart, user.id)
        clearCart()
        
    }

    return(
        <StripeCheckout 
            label='Pay Now' 
            name='Northwind'
            billingAddress
            shippingAddress
            image={logo}
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            style={{marginLeft: 'auto', display:'block'}}
        />
    )
}

const mapDispatch = dispatch => ({
    clearCart: () => dispatch(ClearCart())
})

export default connect(null, mapDispatch)(StripeCheckoutButton)