import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const GlobalContainer = styled.div`
    width: 70%;
    margin: 25px auto;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 314px;
`

export const Button = styled.button`
    padding: 16px 32px;
    margin: 20px auto;
    border: 1px solid black;
    background: none;
    transition: 300ms ease-in-out;
    &:hover{
        background: #63ace5;
        cursor: pointer;
        color: white;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const StyledLink = styled(Link)`
    padding: 16px 32px;
    margin: 20px auto;
    border: 1px solid black;
    background: none;
    transition: 300ms ease-in-out;
    color: black;
    text-decoration: none;
    &:hover{
        background: #1e1f26;
        cursor: pointer;
        color: white;
    }
`

export const GoogleButton = styled.div`
    display: flex;
    flex-direction: row;
    padding: 8px;
    height: 45px;
    width: 80%;
    margin: 0 auto;
    background: #0AB3FB;
    transition: 300ms ease-in-out;
    &:hover{
        background: #0392CF;
        cursor: pointer;
    } 
`

export const GoogleImage = styled.img`
    height: 100%;
    width: auto;
    object-fit: contain;
    background: #eee;
    margin-right: 10px;
`
export const GoogleText = styled.p`
    margin: auto 0;
    font-size: 1.2rem;
    color: white;
`