import React from 'react';
import './testimonials.css';
import Review1 from '../../assets/review/1.jpg';
import Review2 from '../../assets/review/2.jpg';
import Review3 from '../../assets/review/3.jpg';
import Review4 from '../../assets/review/4.jpg';
import Review5 from '../../assets/review/5.jpg';

// import Swiper core and required modules
import {Pagination} from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: Review1,
  },
  {
    avatar: Review2,
  },
  {
    avatar: Review3,
  },
  {
    avatar: Review4,
  },
  {
    avatar: Review5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviw from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable: true}}>
        {data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide className="testimonial">
              <img className="reviewimg" src={avatar} alt="Avatar" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
