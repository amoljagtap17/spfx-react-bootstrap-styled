import React from "react";
import styled from "styled-components";

const StyledSearchPanel = styled.section`
  height: 400px;
  background-color: yellowgreen;

  .search-panel-text {
    font-size: 48px;
    line-height: 49px;
    font-weight: 500;
    margin-bottom: 50px;
  }

  .search-panel-box {
    width: 80%;
    height: 15%;
    border-radius: 50px;
    margin-bottom: 50px;
  }
`;

export const SearchPanel = () => (
  <StyledSearchPanel className="d-flex flex-column justify-content-end align-items-center">
    <h1 className="d-block search-panel-text">Search Panel Text</h1>
    <input
      type="text"
      className="d-block search-panel-box"
      placeholder="Search"
    />
  </StyledSearchPanel>
);
