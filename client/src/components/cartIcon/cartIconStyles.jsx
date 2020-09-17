import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    height: 40px;
    margin: auto 0;
    background: white;
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

export const Count = styled.span`
    position: absolute;
    left: 50%;
    top: 16%;
    font-size: 16px;
`