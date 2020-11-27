import reset from 'styled-reset';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
${reset}
  body{
    margin: 0;
    padding: 0;
  }

  > div {
    display : flex;
  }
`

export default GlobalStyle;