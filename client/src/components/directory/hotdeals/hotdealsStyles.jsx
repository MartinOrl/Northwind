import styled from 'styled-components';

export const GlobalContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    color: black;
    flex-wrap: wrap;
`

export const HotDealItem = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    @media screen and (max-width: 768px){
        margin: 12px 0;
    }
`

export const HotDealImage = styled.img`
    height: 200px;
    width: 300px;
    object-fit: cover;
    margin: 8px 0;
`

export const HotDealTitle = styled.h1`
    margin: 4px 0;
    font-size: 20px;
`

export const HotDealPrice = styled.p`
    font-size: 1.2rem;
`

export const Button = styled.button`
    padding: 16px 32px;
    width: 60%;
    background: none;
    border: none;
    margin: 0 auto;
    border-bottom: 1px solid black;
    transition: 300ms ease-in-out;
    &:hover{
        background: black;
        color: white;
        cursor: pointer;
    }
    @media screen and (max-width: 768px){
        border: 1px solid black;
    }
`