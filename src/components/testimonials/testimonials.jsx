import React from "react";
import "./testimonials.css";
import { Data } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
const Testimonials = () => {
  return (
    <section className="testimonial container section" id="testimonials">
      <h2 className="section_title">COURSES AND ACTIVITIES</h2>
      <span className="section_subtitle"></span>

      <Swiper className="testimonal_container"
              loop={true}
              grabCursor={true}
              spaceBetween={24}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                576: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 48,
                },
              }}
              modules={[Pagination]}
      >
        {Data.map(({id,image,title,description}) => {
            return (
                <SwiperSlide className="testimonial_card" key={id}>
                    <img src={image} alt="" className="testimonial_img" />
                    <h3 className="testimonial_name">{title}</h3>
                    <p className="testimonial_description">{description}</p>
                </SwiperSlide>
            )
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
