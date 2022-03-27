import React from "react";
import { Link, Outlet } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "#f2f2f2",
};
const SubNav = () => {
  return (
    <>
      <nav className="subnav">
        <Link to="top" style={linkStyle}>
          Top
        </Link>
        <Link to="season" style={linkStyle}>
          Season
        </Link>
        <Link to="today" style={linkStyle}>
          Today
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default SubNav;
