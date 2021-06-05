import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    border: 0;
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    outline: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: black;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,0.9);
    border-radius: 5%;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: white;
  }
`;

export default GlobalStyle;
