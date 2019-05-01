import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinning = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  } 
`;

const LoadingWrapper = styled.div`
  min-height: 100vh;
  padding: 10%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  margin: 30px 0; 

  &:after {
    content: " ";
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid ${props => props.theme.secondaryTextColor};
    border-color: ${props => props.theme.secondaryTextColor} transparent ${props => props.theme.secondaryTextColor} transparent;
    animation: ${spinning} 0.7s linear infinite; 
  }
`;

const LoadingText = styled.div `
  font-size: 1em;
  color: ${props => props.theme.secondaryTextColor};
`;

const Loading = () => (
  <LoadingWrapper>
    <LoadingSpinner />
    <LoadingText>Loading, please wait.</LoadingText>
  </LoadingWrapper>
);

export default Loading;