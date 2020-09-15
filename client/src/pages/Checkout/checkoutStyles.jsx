import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Title = styled.h1`
    margin: 60px 0 25px 0;
    font-size: 1.8rem;
`

export const LinkButton = styled(Link)`
    padding: 16px 32px;
    border: 1px solid black;
    background: none;
    outline: none;
    margin: 0 auto;
    color: black;
    font-size: 1.3rem;
    text-decoration: none;
    transition: 300ms ease-in-out;
    &:hover{
        color: white;
        background: black;
    }
`

export const Price = styled.h1`
    text-align: end;
    font-size: 2rem;
    margin: 12px;
`