import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalStyle, Main } from "./shared";
import { Navbar, SearchPanel } from "./features";

const ReactApp = () => (
  <>
    <GlobalStyle />
    <Main>
      <Router>
        <Container fluid>
          <Row noGutters>
            <Col>
              <Navbar />
            </Col>
          </Row>
          <Row noGutters>
            <Col>
              <SearchPanel />
            </Col>
          </Row>
        </Container>
      </Router>
    </Main>
  </>
);

export default ReactApp;
