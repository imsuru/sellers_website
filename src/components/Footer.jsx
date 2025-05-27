import React from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../assets/logo-white.png';

const Footer = () => {
  return (
    <>
      <section className="footer-banner">
        <h2 className="footer-text">Ready to Grow Your Business?</h2>
        <div className="footer-btn">
          <Link to="/pricing">
            <button className="btn btn-light btn-lg">
              Start selling
            </button>
          </Link>
          <a href="https://wa.me/+919820045154" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-outline-light btn-lg">
              Chat with consultant
            </button>
          </a>
        </div>
      </section>

      <section className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <img className="logo mb-3" src={logoWhite} alt="1mdm" />
              <p className="footer-link">One Medical Devices<br />Market Place</p>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <h5>Platform</h5>
              <Link to="/seller" className="footer-link d-block">Sell on 1MDM</Link>
              <Link to="/pricing" className="footer-link d-block">Pricing</Link>
              <Link to="/about" className="footer-link d-block">About Us</Link>
              <Link to="/our-story" className="footer-link d-block">Our Story</Link>
              <a href="https://superlabs.co/careers.php" target="_blank" rel="noopener noreferrer" className="footer-link d-block">
                Careers
              </a>
              <Link to="/blog" className="footer-link d-block">Blog</Link>
              <Link to="/brands" className="footer-link d-block">Brands</Link>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <h5>Press Room</h5>
              <Link to="/press" className="footer-link d-block">Images & B-roll</Link>
              
              <h5 className="mt-4">Policies</h5>
              <Link to="/terms-of-service" className="footer-link d-block">Terms of Service</Link>
              <Link to="/privacy-policy" className="footer-link d-block">Privacy Policy</Link>
              <Link to="/delivery-information" className="footer-link d-block">Delivery Information</Link>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <h5>Reach Us</h5>
              <Link to="/corporate-information" className="footer-link d-block">Corporate Information</Link>
              <Link to="/contact" className="footer-link d-block">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <Link to="/pricing" className="float-1">
        <p><i className="bi bi-cart-check"></i> Start Selling</p>
      </Link>
      
      <a href="https://wa.me/+919943005109" target="_blank" rel="noopener noreferrer" className="float">
        <p><i className="bi bi-headset"></i> Customer Service</p>
      </a>

      <section className="copyright">
        <p>
          © {new Date().getFullYear()} 1MDM ⚡ by{' '}
          <a href="https://www.superlabs.co" target="_blank" rel="noopener noreferrer">
            SuperLabs
          </a>
        </p>
      </section>
    </>
  );
};

export default Footer; 