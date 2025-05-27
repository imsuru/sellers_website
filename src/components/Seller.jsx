import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Counter from './Counter';
import Footer from './Footer';
import SuccessStories from './SuccessStories';
import product1 from '../assets/1mdm-product-1.png';
import product2 from '../assets/1mdm-product-2.png';
import product3 from '../assets/1mdm-product-3.png';
import product4 from '../assets/1mdm-product-image-4.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/seller.css';

const ActionButtons = () => (
  <div className="action-buttons">
    <Link to="/pricing" className="btn btn-start">
      <i className="bi bi-cart-check"></i>
      Start Selling
    </Link>
    <a href="https://wa.me/+919943005109" target="_blank" rel="noopener noreferrer" className="btn btn-service">
      <i className="bi bi-headset"></i>
      Customer Service
    </a>
  </div>
);

const TabContent = ({ isActive, title, description, image }) => (
  <div className={`tab-pane fade ${isActive ? 'show active' : ''}`} role="tabpanel">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1>{title}</h1>
          <br />
          <p>{description}</p>
        </div>
        <div className="col-md-6">
          <img src={image} className="img-fluid" alt="1mdm-product" />
        </div>
      </div>
    </div>
  </div>
);

const Seller = () => {
  const [activeTab, setActiveTab] = useState('home');

  const commaSeparateNumber = (val) => {
    while (/(\d+)(\d{3})/.test(val.toString())) {
      val = val.toString().replace(/(\d+)(\d{3})/, '$1,$2');
    }
    return val;
  };

  React.useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach((counter) => {
      const countTo = counter.getAttribute('data-count');
      const countNum = { value: 0 };

      const animate = () => {
        const duration = 6000;
        const steps = 60;
        const increment = countTo / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
          currentStep++;
          countNum.value += increment;
          counter.textContent = commaSeparateNumber(Math.floor(countNum.value));

          if (currentStep >= steps) {
            clearInterval(timer);
            counter.textContent = commaSeparateNumber(countTo);
          }
        }, duration / steps);
      };

      animate();
    });
  }, []);

  const tabContent = {
    home: {
      title: "Set up a store that showcases your brand",
      description: "Differentiate yourself from the competition with a full store dedicated to your products- no coding or design skills necessary!",
      image: product1
    },
    profile: {
      title: "Increase exposure by up to 120% with smart advertising tools",
      description: "Get your products placed in the right spots to be noticed by the exact audience you are targeting.",
      image: product4
    },
    messages: {
      title: "Optimize your every move with in-depth data and insights",
      description: "Improve performance with dashboards detailing product exposure, click volume, spend, average cost, store visits, and more!",
      image: product2
    },
    settings: {
      title: "Know you're supported throughout your journey",
      description: "From onboarding help to online chats to local support during business hours and account optimization tips -- we're here for you",
      image: product3
    }
  };

  return (
    <>
      <Header />

      <section className="banner-img">
        <div className="container banner">
          <div className="row align-items-center">
            <div 
              className="col-md-6 banner-text"
              role="generic"
              tabIndex="-1"
              aria-label="Banner content"
            >
              <h4>Sell on 1mdm.com</h4>
              <h1 id="heading">Reach millions of B2B buyers<br />globally</h1>
              <div className="banner-btn">
                <Link to="/pricing">
                  <button className="btn btn-danger">
                    Start selling
                  </button>
                </Link>
                <a href="https://wa.me/+919820045154" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-light">
                    Chat with consultant
                  </button>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="float-end">
                <Counter value={26000000} />
                <p>active buyers globally</p>
                <br />
                <Counter value={400000} />
                <p>product inquiries daily</p>
                <br />
                <Counter value={200} />
                <p>countries and regions represented</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container banner-bottom">
          <h2 className="banner-heading">
            1mdm.com is a leading ecommerce platform that <br /> helps SMEs go global
          </h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="ratio ratio-16x9">
                <iframe 
                  src="https://www.youtube.com/embed/TN7iJyc5Uks" 
                  title="YouTube video" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col">
              <p className="para">Connect with millions of business buyers from around the world.</p>
              <p className="para">Get the tools and know-how to build a successful ecommerce presence for your business.</p>
              <p className="para">Pocket more from each sale, with take rates as low as 0% in some cases.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="check">
        <div className="container">
          <h1>Largest number of products & categories of <br />medical devices on a single place - 1mdm.com</h1>
          <br />
          <h5>Connect with buyers worldwide for your product & <br /> start selling now.</h5>
        </div>
      </section>

      <section className="tabs">
        <h2 style={{ color: '#a10005' }}>Grow your business with a suite of tools built for you</h2>
        <br /><br /><br />
        <div className="container">
          <div className="row">
            <div className="col-2">
              <div className="list-group" role="tablist">
                {Object.entries(tabContent).map(([key, { title }]) => (
                  <a 
                    key={key}
                    className={`list-group-item list-group-item-action ${activeTab === key ? 'active' : ''}`}
                    onClick={() => setActiveTab(key)}
                    role="tab"
                    href={`#${key}`}
                  >
                    {key === 'home' ? 'Custom storefront' :
                     key === 'profile' ? 'Advertising tools' :
                     key === 'messages' ? 'Data and analytics' :
                     'Customers support'}
                  </a>
                ))}
              </div>
              <br /><br />
            </div>
            <div className="col-md-10">
              <div className="tab-content">
                {Object.entries(tabContent).map(([key, content]) => (
                  <TabContent
                    key={key}
                    isActive={activeTab === key}
                    {...content}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SuccessStories />

      <ActionButtons />

      <Footer />
    </>
  );
};

export default Seller; 