import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = ({ setLoggedin, loggedIn }) => {
  const [slide, setSlide] = useState(false);
  const showSidebar = () => setSlide(!slide);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(window.innerWidth);
  }, []);

  const isMobile = width <= 1280;

  const logout = () => {
    window.localStorage.removeItem('accessToken');
    setLoggedin(false);
    return;
  };

  return (
    <nav className='navbar'>
      <Link to='/home' className='btn nav-btn btn-logo' style={{ textDecoration: 'none', color: '#f2f2f2' }}>
        <h1>Where was I?</h1>
      </Link>
      <ul className={slide ? 'navbar-holder active' : 'navbar-holder'} slide={slide}>
        {isMobile && (
          <Link
            to='/'
            className='btn nav-btn'
            style={{
              textDecoration: 'none',
              color: '#f2f2f2',
            }}
          >
            Home
          </Link>
        )}
        <Link
          to='/about'
          className='btn nav-btn'
          style={{
            textDecoration: 'none',
            color: '#f2f2f2',
          }}
        >
          About
        </Link>
        {loggedIn ? (
          <Link to='/intro' onClick={logout} className='btn nav-btn' style={{ textDecoration: 'none', color: '#f2f2f2' }}>
            Logout
          </Link>
        ) : (
          <>
            <Link to='/login' className='btn nav-btn' style={{ textDecoration: 'none', color: '#f2f2f2' }}>
              Login
            </Link>
            <Link to='/register' className='btn nav-btn' style={{ textDecoration: 'none', color: '#f2f2f2' }}>
              Register
            </Link>
          </>
        )}
      </ul>

      <div onClick={showSidebar} className={slide ? 'burger cross' : 'burger'} id='burger'>
        <div className='line-1'></div>
        <div className='line-2'></div>
        <div className='line-3'></div>
      </div>
    </nav>
  );
};

export default Navbar;
