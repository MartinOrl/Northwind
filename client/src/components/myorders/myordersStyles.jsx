import styled from 'styled-components';

export const GlobalContainer = styled.div`
    margin: 12px auto 100px auto;
    width: 90%;
`

export const Title = styled.h1`
    margin: 0;
    margin-bottom: 16px;
    font-size: 1.8rem;
`

export const Button = styled.button`
    padding: 12px 24px;
    border: none;
    background: #3795DE;
    color: white;
    transition: 300ms ease-in-out;
    &:hover{
        background: #63ACE5;
        color: black;
    };
`

export const OrderContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 8px 0;
    @media screen and (max-width: 768px){
        flex-direction: column;
        
    }
`

export const Image = styled.img`
    object-fit: cover;
    height: 240px;
    width: 350px;
    margin-right: 10px;
    @media screen and (max-width: 768px){
        width: 80%;
        margin: 8px auto;
        height: 250px;
    }
`

export const OrderTitle = styled.h1`
    margin: 0;
    margin-right: auto;
    font-size: 1.5rem;
    @media screen and (max-width: 768px){
        text-align: center;
        margin: 4px 0;
    }
`

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 0;
    margin-right: auto;
    height: 80px;
    text-align: center;
    @media screen and (max-width: 768px){
        margin: 0 auto;
        flex-direction: row;
    }
`

export const Price = styled.p`
    margin: 0;
    margin-bottom: 8px;
    font-size: 1.3rem;
    @media screen and (max-width: 768px){
        margin: auto 20px;
    }
`

export const Quantity = styled.p`
    font-size: 1.1rem;
    @media screen and (max-width: 768px){
        margin: auto 0;
    }
`

export const Status = styled.h1`
    font-size: 1.4rem;
    text-align: end;
    margin: auto 0;
    @media screen and (max-width: 768px){
        text-align: center;
    }
`