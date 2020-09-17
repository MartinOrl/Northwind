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

    const handleResponsiveClick = (href) => {
        if(window.innerWidth < 768){
            window.location.href=`/${href}`
        }
    }

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
                    <UserIcon clickable={clickable} onClick={() => handleResponsiveClick('myOrders')} />
                    <CartIcon clickable={clickable} onClick={() => handleResponsiveClick('checkout')} />
                </UserOptions>
            </Collapsable>
        </Container>
        
    )
}

export default Header