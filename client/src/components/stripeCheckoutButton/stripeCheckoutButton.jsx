import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

import axios from 'axios'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_SZgJwqkCt9AZxnpNWOjVZ8fs00Ox0v4xO2'

    const onToken = token => {

        axios({
            url: '/payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(response => {
            alert("Payment Succesful")
            console.log('success')
        }).catch(error => {
            console.log('Payment Error: ', error);
            alert("There was an issue with your payment.")
        })
    }

    return(
        <StripeCheckout 
            label='Pay Now' 
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton