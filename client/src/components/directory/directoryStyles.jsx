import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Banner = styled.div`
    width: 90%;
    height: 600px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background-image: ${({ imgUrl }) => `url(${imgUrl})`};
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
`

export const BannerInfo = styled.div`
    position: absolute;
    right: 10%;
    bottom: 30%;
    text-align: center;
    @media screen and (max-width: 1200px){
        bottom: 15%;
    }
`

export const BannerButton = styled(Link)`
    padding: 16px 32px;
    background: none;
    font-size: 2rem;
    border: none;
    border-bottom: 1px solid white;
    text-decoration: none;
    color: white;
    transition: 300ms ease-in-out;
    &:hover{
        background: rgba(255,255,255,.4);
        color: rgba(0,0,0,.7);
        border: 1px solid white;
        cursor: pointer;
    }
    @media screen and (max-width: 768px){
        border: 1px solid white;
    }

`

export const BannerTitle = styled.h1`
    font-size: 3.5rem;
    text-align: center;
    color: white;
    letter-spacing: 5px;
    text-shadow: -2px -2px 8px rgba(0,0,0,.3);
`

export const Title = styled.h1`
    margin: 40px 0 12px 0;
    font-size: 2rem;
    text-align: center;
`

export const Footer = styled.div`
    width: 100%;
    padding: 16px 32px;
    margin-top: 32px;
    height: 200px;
    background: rgba(0,0,0,.1);
    box-shadow: 0 -1px 8px rgba(0,0,0,.4)
`