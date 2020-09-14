import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const GlobalContainer = styled.div`
    position: absolute;
    border: 1px solid black;
    right: 0px;
    top: 50px;
    width: 320px;
    padding: 5px 12px;
    min-height: 100px;
    transition: 300ms ease-in-out;
    background: white;
    z-index: 5;
`

export const Checkout = styled(Link)`
    border: 1px solid black;
    padding: 16px 32px;
    background: none;
    text-decoration: none;
    color: black;
    display: block;
    transition: 200ms ease-in-out;
    text-align: center;
    position: absolute;
    bottom: 5px;
    left: 30%;
    &:hover{
        color: white;
        background: black;
    }
`

export const CartContainer = styled.div`
    max-height: 300px;
    overflow-y: scroll;
    scrollbar-width: none;
    
`

export const ButtonContainer = styled.div`
    position: relative;
    background: white;
    width: 100%;
    height: 80px;
`