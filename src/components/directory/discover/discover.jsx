import React from 'react';

import { GlobalContainer, DiscoverContainer, DiscoverTitle, DiscoverItem, StyledLink } from './discoverStyles'

const Discover = () => {

    return(
        <GlobalContainer>
            <DiscoverContainer>
                <StyledLink to='/winter-jackets'>
                    <DiscoverItem imgUrl='https://images.pexels.com/photos/3775135/pexels-photo-3775135.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'>
                        <DiscoverTitle>Winter Jackets</DiscoverTitle>
                    </DiscoverItem>
                </StyledLink>
                <StyledLink to='/stylish-gloves'>
                    <DiscoverItem imgUrl='https://images.pexels.com/photos/879415/pexels-photo-879415.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'>
                        <DiscoverTitle>Stylish Gloves</DiscoverTitle>
                    </DiscoverItem>
                </StyledLink>
            </DiscoverContainer>
            <StyledLink separate to='/coats'>
                <DiscoverItem separate imgUrl='https://images.pexels.com/photos/3777562/pexels-photo-3777562.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'>
                    <DiscoverTitle separate>Coats</DiscoverTitle>
                </DiscoverItem>
            </StyledLink>
        </GlobalContainer>
    )
};

export default Discover 

