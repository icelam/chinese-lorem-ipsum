import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { lightTheme, darkTheme } from '@styles/colors';
import { mediaColorScheme } from '@styles/media';

const FullPageDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10%;
  box-sizing: border-box;
`;

const NotFoundCode = styled.h1`
  font-size: 60px;
  color: ${lightTheme.secondaryTextColor};
  line-height: 1;
  font-weight: normal;
  margin: 0 0 0.5em 0;

  @media ${mediaColorScheme.dark} { 
    color: ${darkTheme.secondaryTextColor};
  }
`;

const NotFoundTitle = styled.h2`
  font-size: 1.5em;
  color: ${lightTheme.linkHoverColor}
  margin: 0 0 1em 0;

  @media ${mediaColorScheme.dark} { 
    color: ${darkTheme.linkHoverColor};
  }
`;

const NotFoundDescriptions = styled.p`
  font-size: 1em;
  margin: 0;
`;




const NotFound = () => {
  return (
    <FullPageDiv>
      <NotFoundCode>404</NotFoundCode>
      <NotFoundTitle>Page Not Found</NotFoundTitle>
      <NotFoundDescriptions>Sorry, the page you are looking for could not be found. You can <Link to={process.env.PUBLIC_URL + '/'}>click here</Link> to head to homepage.</NotFoundDescriptions>
    </FullPageDiv>
  )
};

export default NotFound;