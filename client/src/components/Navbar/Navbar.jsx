import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions/loginAction";

export const Navbar = ({ isAuthenticated, logoutUser }) => {
  const [slide, setSlide] = useState(false);
  const showSidebar = () => setSlide(!slide);
  const [width, setWidth] = useState(window.innerWidth);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(isAuthenticated);
  }, [isAuthenticated]);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 1280;
  const logout = () => {
    logoutUser();
    setLoggedIn(false);
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#f2f2f2",
  };

  return (
    <nav className="navbar">
      {!isMobile && (
        <ul className="ul-holder left-nav">
          <Link to="/" className="btn nav-btn" style={linkStyle}>
            Home
          </Link>
          <Link to="/explore" className="btn nav-btn" style={linkStyle}>
            Explore
          </Link>
          <Link to="/about" className="btn nav-btn" style={linkStyle}>
            About
          </Link>
        </ul>
      )}

      {isMobile && (
        <ul
          className={slide ? "navbar-holder active" : "navbar-holder"}
          // slide={slide}
        >
          <Link to="/" className="btn nav-btn" style={linkStyle}>
            Home
          </Link>
          <Link to="/explore" className="btn nav-btn" style={linkStyle}>
            Explore
          </Link>
          <Link to="/about" className="btn nav-btn" style={linkStyle}>
            About
          </Link>
          {loggedIn ? (
            <>
              <Link to="/profile" className="btn nav-btn" style={linkStyle}>
                Profile
              </Link>
              <Link
                to="/"
                onClick={logout}
                className="btn nav-btn"
                style={linkStyle}
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="btn nav-btn" style={linkStyle}>
                Login
              </Link>
              <Link to="/register" className="btn nav-btn" style={linkStyle}>
                Register
              </Link>
            </>
          )}
        </ul>
      )}

      <Link to="/" className="btn nav-btn btn-logo" style={linkStyle}>
        <h1>Where was I?</h1>
      </Link>

      {!isMobile && (
        <ul className="ul-holder right-nav">
          {loggedIn ? (
            <>
              <Link to="/profile" className="btn nav-btn" style={linkStyle}>
                Profile
              </Link>
              <Link
                to="/"
                onClick={logout}
                className="btn nav-btn"
                style={linkStyle}
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="btn nav-btn" style={linkStyle}>
                Login
              </Link>
              <Link to="/register" className="btn nav-btn" style={linkStyle}>
                Register
              </Link>
            </>
          )}
        </ul>
      )}
      <div
        onClick={showSidebar}
        className={slide ? "burger cross" : "burger"}
        id="burger"
      >
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
  };
};

const mapDispatchToProps = {
  logoutUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
