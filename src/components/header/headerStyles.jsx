import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 16px 32px;
`

export const Brand = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: auto;
    &:hover{
        cursor: pointer;
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
    outline: none;
    border: none;
    &::placeholder{
        color: rgba(0,0,0,.6)
    };
`

export const UserOptions = styled.div`
    height: 100%;
    margin-left: auto;
`

export const Icon = styled.img`
    height: 40px;
    width: auto;
    margin: 0 8px;
`