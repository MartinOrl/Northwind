import React from 'react';

import { Container, Image, Title, Price } from './collectionitemStyles'

const Collectionitem = ({item}) => {
    const { name, price, imgUrl } = item

    return(
        <Container>
            <Image src={imgUrl} />
            <Title>{name}</Title>
            <Price>{price}</Price>
        </Container>
    )
};

export default Collectionitem 

