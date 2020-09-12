import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    height: 40px;
    margin: auto 12px;
`

export const IconHolder = styled.div`
    &:hover{
        cursor:pointer;
    }
`

export const Icon = styled.img`
    height: 40px;
    width: auto;
`

export const UserOptionsContainer = styled.div`
    text-align: center;
    position: absolute;
    top: 50px;
    width: 150px;
    right: 0;
    border: 1px solid black;
    background: white;
    z-index: 3;
`

export const Option = styled.p`
    padding: 12px 0;
    margin: 0;
    transition: 300ms ease-in-out;
    font-size: 16px;
    &:hover{
        cursor: pointer;
        background: rgba(0,0,0,.1)
    }
`