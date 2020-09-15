import styled from 'styled-components'

export const GlobalContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 250px;
    margin: 12px 0;
`

export const Image = styled.img`
    height: 100%;
    width: 400px;
    object-fit: cover;
    margin-right: 16px;
`

export const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: auto;
    width: 150px;
`

export const Title = styled.h1`
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: 12px;
`

export const QuantityContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const Quantity = styled.p`
    text-align: center;
    margin: auto 0;
    font-size: 1.3rem;
`
export const Button = styled.button`
    background: none;
    outline: none;
    border: none;
    font-size: 1.2rem;
    &:hover{
        cursor: pointer;
    }
`

export const Price = styled.h1`
    margin: auto;
    font-size: 1.3rem;
`

export const Separator = styled.hr`
    width: 100%;
    margin: 12px;
    color: rgba(0,0,0,.2)
`


