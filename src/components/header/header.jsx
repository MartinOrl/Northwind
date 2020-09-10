import React, { useState } from 'react'
import {Container, Brand, BrandImage, BrandText, Search, SearchIcon, SearchBar, UserOptions, Icon} from './headerStyles'
import logo from '../../assets/northwind.svg'
import search from '../../assets/search.svg'
import user from '../../assets/user.svg'

const Header = () => {
    const [active, setActive] = useState(false)
    console.log(active)

    return(
        <Container>
            <Brand>
                <BrandImage src={logo} />
                <BrandText>Northwind</BrandText>
            </Brand>
            <Search>
                <SearchIcon active={active} src={search} />
                <SearchBar type='text' name='search' placeholder='I am looking for ...' />
            </Search>
            <UserOptions>
                <Icon src={user} />
            </UserOptions>
        </Container>
    )
}

export default Header