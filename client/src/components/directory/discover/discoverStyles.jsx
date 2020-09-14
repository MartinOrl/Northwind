import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom'

export const GlobalContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 70%;
    margin: 0 auto;
    margin-bottom: 50px;
    flex-wrap: wrap;
    @media screen and (max-width: 1520px){
        width: 100%;
    }
`

const normalStyle = css`
    width: 100%;
    height: 400px;
    @media screen and (max-width: 1520px){
        width: 100%;
        height: unset;
        background-position: center;
    };
    @media screen and (max-width: 768px){
        width: 100%;
        height: 400px;
        margin: 8px 0;
    }
`

const separateStyle = css`
    width: 100%;
    height: 820px;
    @media screen and (max-width: 1520px){
        width: 35%;
        background-position: center;
    }
    @media screen and (max-width: 768px){
        background-position: center;
        margin: 0 16px;
        width: 100%;
        height: 400px;
        margin: 8px 0;
    }
`

export const getStyle = ({separate}) => {
    if(separate){
        return separateStyle
    }
    return normalStyle
}


export const DiscoverTitle = styled.h1`
    position: absolute;
    opacity: 0;
    top: ${props => !props.separate ? '25%' : '20%'};
    left: 20%;
    transition: 200ms ease-in-out;
    z-index: 5;
`

export const DiscoverItem = styled.div`
    border: 1px solid rgba(0,0,0,.5);
    position: relative;
    background-image: ${({ imgUrl }) => `url(${imgUrl})`};
    background-size: cover;
    transition: 300ms ease-in-out;
    text-align: center;
    &:hover{
        cursor: pointer;
        opacity: 0.75;
        ${DiscoverTitle}{
            opacity: 1;
        }
    }
    ${getStyle}
`

export const DiscoverContainer = styled.div`
    width: 65%;
    margin: 0px 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 1520px){
        width: 60%;
    }
    @media screen and (max-width: 768px){
        width: 100%;
    }
`


export const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    ${
        props => props.separate ? 'width: 30%' : 'width: 100%'
    }
`