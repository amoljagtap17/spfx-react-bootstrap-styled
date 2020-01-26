import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Nav } from "../";

const logo: any = require("../../../assets/images/logo512.png");

const StyledNavbar = styled(Navbar)`
  height: 100px;
  z-index: 3000;
  padding-bottom: 0;
  padding-top: 0;
`;

export default () => {
  const [expanded, setExpanded] = useState(false);

  const onClickHandler = () => setExpanded(false);

  return (
    <StyledNavbar
      expanded={expanded}
      expand="lg"
      bg="transparent"
      variant="dark"
    >
      <Navbar.Brand as={Link} to="/" onClick={onClickHandler} className="h-100">
        <img src={logo} className="d-inline-block h-100 align-top" alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle
        onClick={() => setExpanded(prevExpanded => !prevExpanded)}
      />
      <Navbar.Collapse className="h-100">
        <Nav onClickHandler={onClickHandler} />
      </Navbar.Collapse>
    </StyledNavbar>
  );
};
