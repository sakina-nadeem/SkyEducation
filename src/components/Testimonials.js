import React, { useState } from "react";
import userImg from "../Assests/testimonial-user.png"; 
import leftArrow from "../Assests/backwardicon.png";
import rightArrow from "../Assests/forwardicon.png";
import invertedcommas from "../Assests/invertedcommas.png";
import endinvertedcommas from "../Assests/endinginvertedcommas.png";

import "./testimonials.css"

const testimonials = [
  {
    id: 1,
    name: "Eleysa Anthony",
    role: "Student",
    title: "Supportive instructors, real-world skills.",
    text: "I loved the supportive instructors and practical lessons that prepared me for real-world challenges.",
    img: userImg,
  },
  {
    id: 2,
    name: "John Doe",
    role: "Graduate",
    title: "Life-changing experience!",
    text: "The course gave me confidence and industry-ready skills that I use every day in my career.",
    img: userImg,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      className="py-5"
      style={{
        backgroundColor: "#D9F3FD",
        minheight: "80vh",
        minWidth: "100%",
      }}
      id="blog"
    >
      <div className="container text-center mb-5 ">
        <p
          className="text-uppercase fw-semibold mb-1"
          style={{
            color: "#02AEF1",
            letterSpacing: "0.1rem ",
            fontSize: "0.75rem",
          }}
        >
          Testimonials
        </p>
        <h2 className="fw-bolder playfair-display-custom">
          What our Customers says...
        </h2>
      </div>

      {/* Testimonial Card */}
      <div className="container">
        <div
          className="testimonial-card d-flex flex-column flex-md-row align-items-center justify-content-center gap-5 p-4 rounded-4"
          style={{ backgroundColor: "#02AEF1" }}
        >
          {/* Left Design + Image */}
          <div className="position-relative d-flex  mb-4 mb-md-0">
            {/* White Line Design */}
            <div className="design-line"></div>
            <div className="design-line second"></div>

            {/* Circle Image */}
            <img
              src={testimonials[current].img}
              alt={testimonials[current].name}
              className="rounded-circle border border-3 border-white testimonial-img"
            />
          </div>

          {/* Text */}
          <div
            className="text-white ps-md-4 p-5 text-center text-md-start position-relative"
            style={{ maxWidth: "500px" }}
          >
            <img
              src={invertedcommas}
              alt="quote open"
              className="quote-icon my-2 position-absolute top-0 start-0"
            />
            <h6 className="fw-normal mb-1">{testimonials[current].name}</h6>
            <small className="d-block mb-2">{testimonials[current].role}</small>
            <h5 className="fs-3 mb-2 playfair-display-custom">
              {testimonials[current].title}
            </h5>
            <p className="fw-lighter ts-6">{testimonials[current].text}</p>
            <img
              src={endinvertedcommas}
              alt="quote close"
              className="quote-icon float-end"
            />
          </div>
        </div>

        {/* Arrows */}
        <div className="d-flex justify-content-center gap-3 mt-4">
          <button className="arrow-btn" onClick={prevSlide}>
            <img src={leftArrow} alt="prev" />
          </button>
          <button className="arrow-btn active" onClick={nextSlide}>
            <img src={rightArrow} alt="next" className="invert-icon" />
          </button>
        </div>
      </div>

      
      
    </section>
  );
};

export default Testimonials;
