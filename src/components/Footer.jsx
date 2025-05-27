import React from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../assets/logo-white.png';

const Footer = () => {
  return (
    <>
      <section className="footer-banner text-center">
        <h2 className="footer-text">Ready to Grow Your Business?</h2>
        <div className="footer-btn">
          <Link to="/pricing">
            <button className="btn btn-light btn-lg mb-2 mb-md-0 me-md-2">
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
          <div className="row gy-4">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="footer-brand mb-4">
                <img className="logo mb-3" src={logoWhite} alt="1mdm" />
                <p className="footer-link">One Medical Devices<br />Market Place</p>
              </div>
            </div>
            
            <div className="col-12 col-md-6 col-lg-3">
              <h5 className="mb-3">Platform</h5>
              <div className="d-flex flex-column gap-2">
                <Link to="/seller" className="footer-link">Sell on 1MDM</Link>
                <Link to="/pricing" className="footer-link">Pricing</Link>
                <Link to="/about" className="footer-link">About Us</Link>
                <Link to="/our-story" className="footer-link">Our Story</Link>
                <a href="https://superlabs.co/careers.php" target="_blank" rel="noopener noreferrer" className="footer-link">
                  Careers
                </a>
                <Link to="/blog" className="footer-link">Blog</Link>
                <Link to="/brands" className="footer-link">Brands</Link>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="mb-4">
                <h5 className="mb-3">Press Room</h5>
                <Link to="/press" className="footer-link d-block mb-2">Images & B-roll</Link>
              </div>
              
              <div>
                <h5 className="mb-3">Policies</h5>
                <div className="d-flex flex-column gap-2">
                  <Link to="/terms-of-service" className="footer-link">Terms of Service</Link>
                  <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
                  <Link to="/delivery-information" className="footer-link">Delivery Information</Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <h5 className="mb-3">Reach Us</h5>
              <div className="d-flex flex-column gap-2">
                <Link to="/corporate-information" className="footer-link">Corporate Information</Link>
                <Link to="/contact" className="footer-link">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="d-flex flex-column flex-md-row gap-2 position-fixed bottom-0 end-0 mb-3 me-3">
        <Link to="/pricing" className="btn btn-light">
          <i className="bi bi-cart-check me-2"></i>Start Selling
        </Link>
        
        <a href="https://wa.me/+919943005109" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="btn btn-success">
          <i className="bi bi-headset me-2"></i>Customer Service
        </a>
      </div>

      <section className="copyright py-3">
        <p className="text-center mb-0">
          © {new Date().getFullYear()} 1MDM ⚡ by{' '}
          <a href="https://www.superlabs.co" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-decoration-none">
            SuperLabs
          </a>
        </p>
      </section>
    </>
  );
};

export default Footer; 