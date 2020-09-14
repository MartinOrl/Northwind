import React from 'react';
import { connect } from 'react-redux';
import { AddItemToCart } from '../../../redux/cart/cartActions'
import { Container, Image, Title, Price, AddToCart } from './collectionitemStyles'

const Collectionitem = ({item, addItemToCart}) => {
    const { name, price, imgUrl } = item

    return(
        <Container>
            <Image src={imgUrl} />
            <Title>{name}</Title>
            <Price>{price}$</Price>
            <AddToCart onClick={() => addItemToCart(item)} >Add to Cart</AddToCart>
        </Container>
    )
};

const mapDispatch = dispatch => ({
    addItemToCart: item => dispatch(AddItemToCart(item))
})

export default connect(null, mapDispatch)(Collectionitem) 

