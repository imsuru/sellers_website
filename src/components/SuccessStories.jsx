import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import '../styles/SuccessStories.css';

// Import slider images
import slider1 from '../assets/slider-1.webp';
import slider2 from '../assets/slider-2.webp';
import slider3 from '../assets/slider-3.webp';
import slider4 from '../assets/slider-4.webp';

const SuccessStories = () => {
  useEffect(() => {
    // Initialize the carousel with options
    const carousel = document.getElementById('successStoriesCarousel');
    if (carousel) {
      new bootstrap.Carousel(carousel, {
        interval: 5000, // Changes slides every 5 seconds
        pause: 'hover', // Pauses on mouse hover
        wrap: true, // Continues cycling
        keyboard: true // Allows keyboard navigation
      });
    }
  }, []);

  return (
    <section className="success-stories">
      <div className="container p-0">
        <h2 className="text-center" style={{ color: '#B71C1C' }}>Success stories from 1mdm.com sellers</h2>
        <div id="successStoriesCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="testimonial">
                    <div className="quote-mark">"</div>
                    <p className="testimonial-text">
                      Lab Evolution is an import - export company of reagents and laboratory equipment established 
                      over a decade. Our company's team of experts carefully follows customers all over the world, 
                      offering the most competitive brands and best quality products for your laboratory.
                    </p>
                    <p className="testimonial-author">- Sarah Johnson, Lab Evolution</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="testimonial-image">
                    <img src={slider1} alt="Lab Evolution Success Story" className="img-fluid rounded" />
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="testimonial">
                    <div className="quote-mark">"</div>
                    <p className="testimonial-text">
                      Since joining 1mdm.com, our medical supply business has seen a 200% growth in international sales. 
                      The platform's reach and professional network have been instrumental in our expansion to new markets.
                    </p>
                    <p className="testimonial-author">- Michael Chen, MediTech Solutions</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="testimonial-image">
                    <img src={slider2} alt="MediTech Success Story" className="img-fluid rounded" />
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="testimonial">
                    <div className="quote-mark">"</div>
                    <p className="testimonial-text">
                      The global reach of 1mdm.com has helped us connect with healthcare providers worldwide. 
                      Our diagnostic equipment sales have increased significantly, and the platform's support 
                      has been exceptional.
                    </p>
                    <p className="testimonial-author">- Emma Rodriguez, DiagnosticPro International</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="testimonial-image">
                    <img src={slider3} alt="DiagnosticPro Success Story" className="img-fluid rounded" />
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="testimonial">
                    <div className="quote-mark">"</div>
                    <p className="testimonial-text">
                      1mdm.com's platform has revolutionized how we connect with international buyers. 
                      The seamless transaction process and dedicated support team have made expanding our 
                      medical equipment business easier than ever.
                    </p>
                    <p className="testimonial-author">- David Park, Global MedSupply</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="testimonial-image">
                    <img src={slider4} alt="Global MedSupply Success Story" className="img-fluid rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-indicators">
            <button type="button" data-bs-target="#successStoriesCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#successStoriesCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#successStoriesCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#successStoriesCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#successStoriesCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#successStoriesCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories; 