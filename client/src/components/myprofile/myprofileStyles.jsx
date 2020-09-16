import styled from 'styled-components';

export const GlobalContainer = styled.div`
    margin: 12px auto;
    width: 90%;
`

export const Title = styled.h1`
    margin: 0;
    margin-bottom: 16px;
    font-size: 1.8rem;
`

export const Button = styled.button`
    padding: 12px 24px;
    border: none;
    background: #3795DE;
    color: white;
    transition: 300ms ease-in-out;
    &:hover{
        background: #63ACE5;
        color: black;
    };
`