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
    @media screen and (max-width: 768px){
        flex-direction: column;
        width: 90%;
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
        margin: 0 auto;
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
    @media screen and (max-width: 768px){
        opacity: 1;
        top: 10%;
        left: 13%;
    }
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
    ${getStyle};
    @media screen and (max-width: 768px){
        opacity: 1 !important;
    }
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
        margin: 0 auto;
    }
`


export const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    width: ${props => props.separate ? '30%' : '100%'};
    @media screen and (max-width: 768px){
        width: 100%;
    }
`