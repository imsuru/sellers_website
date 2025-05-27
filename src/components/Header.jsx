import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/1mdm-168x58.png';

const Header = () => {
  return (
    <>
      <div className="top-section">
        <div className="container">
          <div className="top-bar">
            <div className="left-bar">
              <span>World's Largest Medical Equipment Market Place</span>
            </div>
            <div className="right-bar">
              <Link to="/account">My account</Link>
              <span className="separator">|</span>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="menubar sticky-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="1MDM" className="logo" />
              </Link>
              <div className="navbar-nav ms-auto">
                <Link className="nav-link" to="/about">About Us</Link>
                <Link className="nav-link" to="/story">Our Story</Link>
                <Link className="nav-link" to="/sell">Sell on 1MDM</Link>
                <Link className="nav-link" to="/pricing">Pricing</Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header; 