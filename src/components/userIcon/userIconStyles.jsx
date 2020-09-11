import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    height: 30px;
    margin: auto 12px;
`

export const IconHolder = styled.div`
    &:hover{
        cursor:pointer;
    }
`

export const Icon = styled.img`
    height: 30px;
    width: auto;
`

export const UserOptionsContainer = styled.div`
    text-align: center;
    width: 100px;
    position: absolute;
    top: 50px;
    right: 0;
    border: 1px solid black;
`

export const Option = styled.p`
    padding: 10px 0;
    margin: 0;
    transition: 300ms ease-in-out;
    font-size: 12px;
    &:hover{
        cursor: pointer;
        background: rgba(0,0,0,.1)
    }
`