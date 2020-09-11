import React from 'react'
import {Container, Collapsable, Brand, BrandImage, BrandText, Search, SearchIcon, SearchBar, UserOptions, Icon} from './headerStyles'
import logo from '../../assets/northwind.svg'
import search from '../../assets/search.svg'
import user from '../../assets/user.svg'

import CartIcon from '../cartIcon/cartIcon'

const Header = () => {
    console.log(window.innerWidth)
    return(
        <Container>
            <Brand>
                <BrandImage src={logo} />
                <BrandText>Northwind</BrandText>
            </Brand>
            <Collapsable>
                <Search>
                    <SearchIcon src={search} />
                    <SearchBar type='text' name='search' placeholder='I am looking for ...' />
                </Search>
                <UserOptions>
                    <Icon src={user} />
                    <CartIcon />
                </UserOptions>
            </Collapsable>
        </Container>
    )
}

export default Header