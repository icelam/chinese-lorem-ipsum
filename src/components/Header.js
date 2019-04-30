import React from 'react';
import styled from 'styled-components';

import Container from '@components/Container';
import SetArticleLength from '@containers/SetArticleLengthContainer';

import { lightTheme, darkTheme } from '@styles/colors';
import { mediaColorScheme, mediaQueries } from '@styles/media';

const HeaderPlaceHolder = styled.div`
  min-height: 61px;
`;

const HeaderDiv = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid ${lightTheme.headerBorderColor};
  background-color: ${lightTheme.backgroundColor};
  color: ${lightTheme.headerTextColor};


  @media ${mediaColorScheme.dark} {
    border-bottom: 1px solid ${darkTheme.headerBorderColor};
    background-color: ${darkTheme.backgroundColor};
    color: ${darkTheme.headerTextColor};
  }

  @media ${mediaQueries.tabletDesktop} {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

const HeaderContainer = styled(Container)`
  text-align: center;

  @media ${mediaQueries.tabletDesktop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const SiteName = styled.h1`
  font-weight: bold;
  font-size: 1.5em;
  line-height: 1em;
  margin: 0;

  @media ${mediaQueries.mobile} {
    margin-bottom: 0.5em;
  }
`;

const Header = () => (
  <HeaderPlaceHolder>
    <HeaderDiv>
      <HeaderContainer>
        <SiteName>中文假字生成器</SiteName>
        <SetArticleLength />
      </HeaderContainer>
    </HeaderDiv>
  </HeaderPlaceHolder>
);

export default Header;