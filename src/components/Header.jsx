import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/1mdm-168x58.png';

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <>
      <div className="top-section d-none d-md-block">
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
            <div className="container-fluid px-0">
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="1MDM" className="logo" />
              </Link>
              
              <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded={!isNavCollapsed} 
                aria-label="Toggle navigation"
                onClick={handleNavCollapse}
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                <div className="navbar-nav ms-auto">
                  <Link className="nav-link" to="/about">About Us</Link>
                  <Link className="nav-link" to="/story">Our Story</Link>
                  <Link className="nav-link" to="/sell">Sell on 1MDM</Link>
                  <Link className="nav-link" to="/pricing">Pricing</Link>
                  <div className="d-md-none mt-3">
                    <Link className="nav-link" to="/account">My account</Link>
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header; 