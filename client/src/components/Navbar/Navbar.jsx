import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = ({ setLoggedin, loggedIn }) => {
  const [slide, setSlide] = useState(false);
  const showSidebar = () => setSlide(!slide);
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 1280;
  const logout = () => {
    window.localStorage.removeItem('accessToken');
    setLoggedin(false);
    return;
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#f2f2f2',
  };

  return (
    <nav className='navbar'>
      {!isMobile && (
        <ul className='ul-holder left-nav'>
          <Link to='/' className='btn nav-btn' style={linkStyle}>
            Home
          </Link>

          <Link to='/about' className='btn nav-btn' style={linkStyle}>
            About
          </Link>
        </ul>
      )}

      {isMobile && (
        <ul className={slide ? 'navbar-holder active' : 'navbar-holder'} slide={slide}>
          <Link to='/' className='btn nav-btn' style={linkStyle}>
            Home
          </Link>

          <Link to='/about' className='btn nav-btn' style={linkStyle}>
            About
          </Link>
          {loggedIn ? (
            <Link to='/intro' onClick={logout} className='btn nav-btn' style={linkStyle}>
              Logout
            </Link>
          ) : (
            <>
              <Link to='/login' className='btn nav-btn' style={linkStyle}>
                Login
              </Link>
              <Link to='/register' className='btn nav-btn' style={linkStyle}>
                Register
              </Link>
            </>
          )}
        </ul>
      )}

      <Link to='/home' className='btn nav-btn btn-logo' style={linkStyle}>
        <h1>Where was I?</h1>
      </Link>

      {!isMobile && (
        <ul className='ul-holder right-nav'>
          {loggedIn ? (
            <Link to='/intro' onClick={logout} className='btn nav-btn' style={linkStyle}>
              Logout
            </Link>
          ) : (
            <>
              <Link to='/login' className='btn nav-btn' style={linkStyle}>
                Login
              </Link>
              <Link to='/register' className='btn nav-btn' style={linkStyle}>
                Register
              </Link>
            </>
          )}
        </ul>
      )}
      <div onClick={showSidebar} className={slide ? 'burger cross' : 'burger'} id='burger'>
        <div className='line-1'></div>
        <div className='line-2'></div>
        <div className='line-3'></div>
      </div>
    </nav>
  );
};

export default Navbar;
