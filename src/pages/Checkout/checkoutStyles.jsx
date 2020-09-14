import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Title = styled.h1`
    margin: 80px 0;
    font-size: 1.5rem;
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