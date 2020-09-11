import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    height: 30px;
    margin: auto 0;
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

export const Count = styled.span`
    position: absolute;
    left: 50%;
    top: 14%;
    font-size: 11px;
`