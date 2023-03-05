import newsletterServices from '../services/newsletterService';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Footer = () => {

  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    newsletterServices.create({ email }).then(() => {
      setEmail('');
      toast.success('Thank you for subscribing!');
    },
    () => {
      toast.error('Please enter email address!');
    });
  };

  return (
    <footer className="bg-second">
      <div className="container">
        <div className="row">
          <div className="col-3 col-md-6">
            <h3 className="footer-head">Products</h3>
            <ul className="menu">
              <li>
                <a href="/#">Help center</a>
              </li>
              <li>
                <a href="/#">Contact us</a>
              </li>
              <li>
                <a href="/#">product help</a>
              </li>
              <li>
                <a href="/#">warranty</a>
              </li>
              <li>
                <a href="/#">order status</a>
              </li>
            </ul>
          </div>
          <div className="col-3 col-md-6">
            <h3 className="footer-head">services</h3>
            <ul className="menu">
              <li>
                <a href="/#">Help center</a>
              </li>
              <li>
                <a href="/#">Contact us</a>
              </li>
              <li>
                <a href="/#">product help</a>
              </li>
              <li>
                <a href="/#">warranty</a>
              </li>
              <li>
                <a href="/#">order status</a>
              </li>
            </ul>
          </div>
          <div className="col-3 col-md-6">
            <h3 className="footer-head">support</h3>
            <ul className="menu">
              <li>
                <a href="/#">Help center</a>
              </li>
              <li>
                <a href="/#">Contact us</a>
              </li>
              <li>
                <a href="/#">product help</a>
              </li>
              <li>
                <a href="/#">warranty</a>
              </li>
              <li>
                <a href="/#">order status</a>
              </li>
            </ul>
          </div>
          <div className="col-3 col-md-6 col-sm-12">
            <div className="contact">
              <h3 className="contact-header">DogeShop</h3>
              <ul className="contact-socials">
                <li>
                  <a href="/#">
                    <i className="bx bxl-facebook-circle" />
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="bx bxl-instagram-alt" />
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="bx bxl-youtube" />
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="bx bxl-twitter" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="subscribe">
              <input onChange={handleChange} value={email} type="email" placeholder="ENTER YOUR EMAIL" />
              <button onClick={handleSubmit}>subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
