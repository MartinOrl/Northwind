import React from 'react';
import { connect } from 'react-redux';
import { AddItemToCart } from '../../../redux/cart/cartActions';
import { GlobalContainer, HotDealImage, HotDealItem, HotDealTitle, HotDealPrice, Button } from './hotdealsStyles'

const Hotdeals = ({hotDeals, addItemToCart}) => {

    return(
        <GlobalContainer>
            {
                hotDeals.map(deal => ( 
                    <HotDealItem>
                        <HotDealImage src={deal.imgUrl} />
                        <HotDealTitle>{deal.name}</HotDealTitle>
                        <HotDealPrice>{deal.price}$</HotDealPrice>
                        <Button onClick={() => addItemToCart(deal)} >Add to Cart</Button>
                    </HotDealItem>
                ))
            }
        </GlobalContainer>
    )
};

const mapDispatch = dispatch => ({
    addItemToCart: item => dispatch(AddItemToCart(item))
})

export default connect(null, mapDispatch)(Hotdeals) 

