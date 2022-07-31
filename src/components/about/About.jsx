import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Me"></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5> Experience</h5>
              <small>One Year Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>30+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5> Projects</h5>
              <small> 50+ Complited</small>
            </article>
          </div>
          <p>
            I am Sures Ranathunga commonly known as MRX. Due to the problematic
            situation in the environment where I grew up, I did not get a school
            education. But with the help of friends and elders, I learned to
            read and write. In 2016 I was able to buy a computer. That was a
            turning point in my life. I was able to see the world through the
            internet. I realized that I was underground . I started to climb the
            grapes from it. That is a little bit about me. I have worked a lot
            in the last few years. currently, I am a freelancer, co-founder of
            Rivonit technology, co-founder of TMX apparel, and the CEO of
            Taprobana computer service.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
