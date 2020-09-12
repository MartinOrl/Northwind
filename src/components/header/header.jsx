import React, { useState, useEffect } from 'react'
import {Container, Collapsable, Brand, BrandImage, BrandText, Search, SearchIcon, SearchBar, UserOptions, StyledLink } from './headerStyles'


import logo from '../../assets/northwind.svg'
import search from '../../assets/search.svg'

import CartIcon from '../cartIcon/cartIcon'
import UserIcon from '../userIcon/userIcon'


const Header = () => {
    const [clickable, setClickable] = useState(true)
    useEffect(() => {
        if(window.innerWidth < 768){
            setClickable(false)
        }
    }, [])
    return(
        <Container>
            <StyledLink to='/'>
                <Brand>
                    <BrandImage src={logo} />
                    <BrandText>Northwind</BrandText>
                </Brand>
            </StyledLink>
            <Collapsable>
                <Search>
                    <SearchIcon src={search} />
                    <SearchBar type='text' name='search' placeholder='I am looking for ...' />
                </Search>
                <UserOptions>
                    <UserIcon clickable={clickable} />
                    <CartIcon clickable={clickable} />
                </UserOptions>
            </Collapsable>
        </Container>
        
    )
}

export default Header