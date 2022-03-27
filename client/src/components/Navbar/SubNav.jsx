import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const linkStyle = {
  textDecoration: "none",
  color: "#f2f2f2",
};

const SubNavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  z-index: 0;
  height: fit-content;
  position: relative;

  padding: 20px 0;
  @media only screen and (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }
`;
const SubNav = () => {
  return (
    <SubNavWrapper>
      <Link to="top" style={linkStyle}>
        Top
      </Link>
      <Link to="season" style={linkStyle}>
        Season
      </Link>
      <Link to="today" style={linkStyle}>
        Today
      </Link>
    </SubNavWrapper>
  );
};

export default SubNav;
