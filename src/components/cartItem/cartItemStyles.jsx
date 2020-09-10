import styled from 'styled-components'

export const ItemContainer = styled.div`
    margin: 16px 32px;
    border: 1px solid red;
    display: flex;
    flex-direction: row;
`

export const Image = styled.img`
    width: 350px;
    border: 2px solid blue;
    @media screen and (max-width: 768px){
        width: 200px;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 12px;
`

export const Title = styled.h1`
    font-size: 1.6rem;
    margin: 8px 0;
`

export const Description = styled.p`
    font-size: 1.2rem;
    margin: 8px 0 16px 0;
    color: #777;
`

export const Rating = styled.p`
    font-size: 1.4rem;
    margin: 0;
`

export const AssetContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto 16px auto auto;
    position: relative;
`

export const QuantityOptions = styled.div`
    margin: 0 32px;
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 120px;
`

export const Quantity = styled.p`
    font-size: 1rem;
    margin: 8px 12px;
`
export const Price = styled.p`
    font-size: 1.2rem;
    margin: 8px 8px;
`

export const Separator = styled.hr`
    color: rgba(0,0,0,.3);
    width: 90%;
`

export const Button = styled.p`
    font-size: 12px;
    &:hover{
        cursor: pointer;
    }
`
