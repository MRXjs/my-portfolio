import React from 'react';
import {ReactDOM} from 'react';
import './contact.css';
import {MdOutlineMail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import {useRef} from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

const Contact = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_4qodtq9',
        'template_st6ivxg',
        form.current,
        'g2DT9-dfc9yNNNxIv',
      )
      .then(
        result => {
          console.log(result.text);
          swal({
            title: 'Message sent!',
            text: '',
            icon: 'success',
            timer: '1200',
          });
        },
        error => {
          console.log(error.text);
          swal({
            title: 'Something wrong!',
            text: '',
            icon: 'error',
            timer: '1250',
          });
        },
      );
    e.target.reset();
  };

  const notYetMsg = () => {
    swal({
      title: 'Not yet!',
      text: '',
      icon: 'warning',
      timer: '1250',
    });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>sureshmadawa763@gmail.com</h5>
            <a href="mailto:sureshmadawa763@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Sures Ranathunga</h5>
            <a href="https://m.me/SLmrx" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+94 76xxxxxxx</h5>
            <a
              onClick={() => {
                notYetMsg();
              }}>
              Send a message
            </a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
