import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

export const ErrorImageText = styled.h2`
  font-size: 28px;
  color: black;
`;

export const LinkHome = styled(Link)`
  padding: 16px 32px;
  border: 1px solid black;
  color: black;
  outline: none;
  background: none;
  text-decoration: none;
  transition: 300ms ease-in-out;
  &:hover{
    color: white;
    background: #005b96;
    border: 1px solid white;
  }
`