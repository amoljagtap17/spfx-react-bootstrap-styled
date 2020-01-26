import styled from "styled-components";

const backgroundImg: any = require("../../../assets/images/background.jpg");

export const Main = styled.main`
  font-family: "Lato", sans-serif;

  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${backgroundImg}) no-repeat fixed center;
  background-size: cover;
  color: white;
  height: 100%;
  min-height: 100vh;
`;
