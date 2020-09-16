import styled from 'styled-components';

export const GoogleButton = styled.div`
    display: flex;
    flex-direction: row;
    padding: 8px;
    height: 45px;
    width: 250px;
    margin: 0 auto;
    background: #0AB3FB;
    transition: 300ms ease-in-out;
    &:hover{
        background: #0392CF;
        cursor: pointer;
    } 
`

export const GoogleImage = styled.img`
    height: 100%;
    width: auto;
    object-fit: contain;
    background: #eee;
    margin-right: 10px;
`
export const GoogleText = styled.p`
    margin: auto 0;
    font-size: 1.2rem;
    color: white;
`