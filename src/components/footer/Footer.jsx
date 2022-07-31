import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        MRX
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/SLmrx" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/mrx.jsx" target="_blank">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/MRX83201090" target="_blank">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright"> &#169; MRX All rights reserved.</div>
    </footer>
  );
};

export default Footer;
