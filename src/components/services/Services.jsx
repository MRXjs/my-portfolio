import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Image Editing</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>product image editing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>photo manipulation.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>image retouching.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>image restoration.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>mockup design.</p>
            </li>
          </ul>
        </article>
        {/*=======================*/}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>custom website.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>web application.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>email template.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>convert psd.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>scripting.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>landing page.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>browser extension.</p>
            </li>
          </ul>
        </article>
        {/*=======================*/}
        <article className="service">
          <div className="service__head">
            <h3>Mobile Apps</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>full app creation.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>convert site to app.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>app customization.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> BUG fixes.</p>
            </li>
          </ul>
        </article>
        {/*=======================*/}
      </div>
    </section>
  );
};

export default Services;
