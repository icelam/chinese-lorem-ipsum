import { createGlobalStyle } from 'styled-components';

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
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.mainTextColor};
    scroll-behavior: smooth;
  }

  a {
    color: ${props => props.theme.linkColor};
    text-decoration: underline;

    &:hover {
      color: ${props => props.theme.linkHoverColor};
    }
  }
`;

export default GlobalStyle;