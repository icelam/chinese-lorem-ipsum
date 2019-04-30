import { createGlobalStyle } from 'styled-components';

import { lightTheme, darkTheme } from '@styles/colors';
import { mediaColorScheme } from '@styles/media';

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-text-size-adjust: 100%;
  }

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 微軟正黑體,"Microsoft JhengHei","Microsoft JhengHei UI","Microsoft YaHei","Microsoft YaHei UI","PingFang TC","Lantinghei TC","Heiti TC","Apple LiGothic","PMingLiU",Arial,sans-serif;
    font-size: 16px;
    line-height: 150%;
    text-align: left;
    background-color: ${lightTheme.backgroundColor};
    color: ${lightTheme.mainTextColor};
    scroll-behavior: smooth;
  }

  a {
    color: ${lightTheme.linkColor};
    text-decoration: underline;

    &:hover {
      color: ${lightTheme.linkHoverColor};
    }
  }

  @media ${mediaColorScheme.dark} { 
    html, body {
      background-color: ${darkTheme.backgroundColor};
      color: ${darkTheme.mainTextColor};
    }

    a {
    color: ${darkTheme.linkColor};

      &:hover {
        color: ${darkTheme.linkHoverColor};
      }
    }
  }
`;

export default GlobalStyle;