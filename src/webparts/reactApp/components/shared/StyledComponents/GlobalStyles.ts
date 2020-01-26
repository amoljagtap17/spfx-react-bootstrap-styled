import "bootstrap/dist/css/bootstrap.min.css";
import { createGlobalStyle } from "styled-components";

const font: any = require("../../../assets/fonts/Lato-Regular.ttf");

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Lato";
    src: url(${font});
    font-weight: 300;
    font-style: normal;
  }

  body,
  html {
    width: 100%;
    height: 100%;
  }

  .container-fluid {
    padding-left: 0;
    padding-right: 0;
  }
`;
