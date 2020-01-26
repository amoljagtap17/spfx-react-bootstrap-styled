import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const NAVITEMS: string[] = ["item-1", "item-2", "item-3", "item-4", "item-5"];

interface INavProps {
  onClickHandler: () => void;
}

const StyledNav = styled(Nav)`
  .active {
    padding-bottom: 3px !important;
    border-bottom: 5px solid yellowgreen;
  }
`;

export default ({ onClickHandler }: INavProps) => (
  <StyledNav className="mr-auto h-100">
    {NAVITEMS.map(item => (
      <Nav.Item key={item} as="li" onClick={onClickHandler}>
        <Nav.Link
          as={NavLink}
          to={`/dashboards/types/${item.trim()}`}
          className="text-white d-flex h-100 align-items-center"
        >
          {item.trim().replace("-", " ")}
        </Nav.Link>
      </Nav.Item>
    ))}
  </StyledNav>
);
