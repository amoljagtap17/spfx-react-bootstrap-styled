import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const StyledTileList = styled(Row)`
  color: black;

  .tile-list-card {
    height: 200px;

    span {
      color: black;
    }
  }
`;

const TILELISTDATA = [
  {
    icon: "News",
    link: false,
    url: ""
  },
  {
    icon: "FAQ",
    link: true,
    url: "/faq"
  },
  {
    icon: "ABOUT",
    link: true,
    url: "/about"
  },
  {
    icon: "EXTRA",
    link: true,
    url: "/extra"
  }
];

export const TileList = () => (
  <StyledTileList className="row-cols-1 row-cols-md-2 row-cols-lg-4 m-4">
    {TILELISTDATA.map(tile => (
      <Col className="mb-4 mb-lg-0" key={tile.icon}>
        {tile.link ? (
          <Link to={tile.url} className="nav-link p-0">
            <Card className="tile-list-card">
              <Card.Body className="d-flex justify-content-center align-items-center">
                <span>{tile.icon}</span>
              </Card.Body>
            </Card>
          </Link>
        ) : (
          <Card className="tile-list-card">
            <Card.Body className="d-flex justify-content-center align-items-center">
              <span>{tile.icon}</span>
            </Card.Body>
          </Card>
        )}
      </Col>
    ))}
  </StyledTileList>
);
