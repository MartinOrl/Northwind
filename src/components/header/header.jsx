import React from 'react'
import {Container, Collapsable, Brand, BrandImage, BrandText, Search, SearchIcon, SearchBar, UserOptions} from './headerStyles'
import logo from '../../assets/northwind.svg'
import search from '../../assets/search.svg'

import CartIcon from '../cartIcon/cartIcon'
import UserIcon from '../userIcon/userIcon'

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
                    <UserIcon />
                    <CartIcon />
                </UserOptions>
            </Collapsable>
        </Container>
    )
}

export default Header