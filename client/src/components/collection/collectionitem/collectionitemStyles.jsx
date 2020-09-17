import styled from 'styled-components';

export const Container = styled.div`
    padding: 16px 32px;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 300px;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`

export const Image = styled.img`
    height: 400px;
    width: auto;
    object-fit: cover;
    margin-bottom: 12px;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`

export const Title = styled.h1`
    margin: 0;
    margin-bottom: 8px;
`

export const Price = styled.p`
    margin: 0;
    margin-bottom: 8px;
    font-size: 1.2rem;
`

export const AddToCart = styled.button`
    padding: 16px 32px;
    background: none;
    border: 1px solid black;
    outline: none;
    transition: 300ms ease-in-out;
    &:hover{
        background: black;
        color: white;
        cursor: pointer;
    }
`