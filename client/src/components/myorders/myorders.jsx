import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { SelectCurrentUser, SelectUserOrders } from '../../redux/user/userSelectors'

import { GlobalContainer, Title, OrderContainer, Image, OrderTitle, PriceContainer, Price, Quantity, Status  } from './myordersStyles'


const MyOrders = ({ orders}) => {
    return(
        <GlobalContainer>
            <Title>My Orders</Title>
            {
                orders 
                ? 
                orders.map(order=> (
                    <OrderContainer>
                        <Image src={order.imgUrl} />
                        <OrderTitle>{order.name}</OrderTitle>
                        <PriceContainer>
                            <Price>{parseFloat(order.price * order.quantity).toFixed(2)}$</Price>
                            <Quantity>Quantity: {order.quantity}</Quantity>
                        </PriceContainer>
                        <Status>Delivered</Status>
                    </OrderContainer>
                ))
                : null
            }
        
        </GlobalContainer>
    )
};

const mapState = createStructuredSelector({
    user: SelectCurrentUser,
    orders: SelectUserOrders
})

export default connect(mapState)(MyOrders) 

