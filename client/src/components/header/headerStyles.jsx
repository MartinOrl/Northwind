import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    margin-right: auto;
    @media screen and (max-width: 768px){
        margin: ${props => props.brand ? '0 auto' : '0 auto 0 0'}   
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 16px 48px;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`

export const Brand = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: auto;
    &:hover{
        cursor: pointer;
    }
    @media screen and (max-width: 768px){
        margin: 0 auto;
    }
`

export const BrandImage = styled.img`
    width: auto;
    height: 50px;
    object-fit: contain;
    margin-right: 12px;
`

export const BrandText = styled.h1`
    margin: 0;
`

export const SearchIcon = styled.img`
    height: auto;
    width: 25px;
    margin-right: 2px;
    transition: 300ms ease-in-out;
`

export const Search = styled.div`
    display: flex;
    flex-direction: row;
    border: none;
    border-bottom: 1px solid black;
    position: relative;
    margin-right: 100px;
    @media screen and (max-width: 768px){
        display: none;
    }
    &:focus-within{
        ${SearchIcon}{
            transform: rotate(45deg);
        }
    }
`

export const SearchBar = styled.input`
    width: 150px;
    padding: 8px 12px;
    background: none;
    font-size: 16px;
    outline: none;
    border: none;
    &::placeholder{
        color: rgba(0,0,0,.6)
    };
`

export const UserOptions = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 768px){
        padding: 16px;
        justify-content: space-evenly;
    }
`

export const Icon = styled.img`
    height: 30px;
    width: auto;
    margin: auto 8px;
`

export const Collapsable = styled.div`
    display: flex;
    flex-direction: row;
    z-index: 20;
    @media screen and (max-width: 768px){
        flex-direction: column;
        position: fixed;
        bottom: 0;
        left: 0;
        padding: 0px 32px;
        box-sizing: border-box;
        width: 100%;
        border: 1px solid black;
        background: white;
        justify-content: space-evenly;
    }
`
