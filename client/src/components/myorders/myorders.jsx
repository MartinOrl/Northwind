import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { SelectCurrentUser } from '../../redux/user/userSelectors'

import { GlobalContainer, Title, OrderContainer, Image, OrderTitle, PriceContainer, Price, Quantity, Status  } from './myordersStyles'


const Myorders = ({user}) => {

    return(
        <GlobalContainer>
            <Title>My Orders</Title>
            {
                
            }
        
        </GlobalContainer>
    )
};

const mapState = createStructuredSelector({
    user: SelectCurrentUser
})

export default connect(mapState)(Myorders) 

