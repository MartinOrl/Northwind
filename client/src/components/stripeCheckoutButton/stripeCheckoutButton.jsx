import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

import logo from '../../assets/northwind.svg'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_SZgJwqkCt9AZxnpNWOjVZ8fs00Ox0v4xO2'

    const onToken = token => {
        alert("Payment Succesful")
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

export default StripeCheckoutButton