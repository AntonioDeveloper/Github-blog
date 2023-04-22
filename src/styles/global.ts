import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
  }

  body {
    background-color: ${(props) => props.theme.background};
    background-image: url("src/assets/cover.png");
    background-position: top;
    background-repeat: no-repeat;
    background-size: auto;
  }
`;