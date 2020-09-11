import styled from 'styled-components'

export const GlobalContainer = styled.div`
    margin: 8px 0;
`

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const Image = styled.img`
    height: 50px;
    width: 80px;
    border: 2px solid blue;
    margin: auto 0;
    @media screen and (max-width: 768px){
        width: 200px;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 6px;
`

export const Title = styled.h1`
    font-size: 12px;
    margin: 2px 0;
`

export const AssetContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    margin: auto 0;
`

export const Price = styled.p`
    font-size: 14px;
    margin: 4px 0;
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
