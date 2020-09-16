import styled from 'styled-components';

export const GlobalContainer = styled.div`
    width: 70%;
    margin: 25px auto;
    text-align: center;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 314px;
`
export const Button = styled.button`
    padding: 16px 32px;
    margin: 20px auto;
    border: 1px solid black;
    background: none;
    transition: 300ms ease-in-out;
    &:hover{
        background: #63ace5;
        cursor: pointer;
        color: white;
    }
`