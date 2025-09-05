import React from "react";
import aboutimage01 from "../Assests/aboutimg00.png";
import aboutimage02 from "../Assests/aboutimg01.png";
import aboutimage03 from "../Assests/aboutimg02.png";
import aboutimage04 from "../Assests/aboutimg03.png";
import "./about.css";

const About = () => {
  return (
    <section
      className="py-5"
      style={{ backgroundColor: "#02AEF126" }}
      id="about"
    >
      <div className="container">
        
        <div className="text-center mb-5">
          <h2
            className="fw-bold playfair-display-custom mb-3"
            style={{ color: "rgba(2, 174, 241, 1)" }}
          >
            Exceptional training across health,
            <br /> beauty, and public services.
          </h2>
          <p className="text-muted mb-0">
            Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin neque.
          </p>
        </div>

        
        <div className="row align-items-center text-lg-start text-center">
          {/* About Text */}
          <div className="col-lg-6 px-lg-5 col-md-12 mb-5  d-flex flex-column justify-content-start about-text">
            <p>
              At Sky Education, we are dedicated to fostering learning and
              development across a broad spectrum of disciplines, from health
              and beauty to public services and education. Established in the
              UK, our institution is committed to providing high-quality,
              accessible education that equips our students with the skills and
              knowledge necessary to excel in their chosen fields.
            </p>
            <p>
              We strive to provide innovative, relevant, and flexible learning
              solutions that prepare our students for successful careers and
              meaningful lives.
            </p>
            <div className="d-flex justify-content-lg-start justify-content-center ">
              <button
                className="btn px-5 py-2 mt-2 LearnButton"
                style={{
                  backgroundColor: "#02AEF1",
                  borderColor: "#BA7894",
                  color: "#fff",
                  borderRadius: "6px",
                }}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Images */}
          <div className="col-lg-6 col-md-12 mt-4 mt-lg-0">
            <div className="row g-3 justify-content-center">
              <div className="col-6">
                <img
                  src={aboutimage01}
                  alt="about"
                  className="img-fluid"
                />
              </div>
              <div className="col-6">
                <img
                  src={aboutimage02}
                  alt="about"
                  className="img-fluid rounded-top-right"
                />
              </div>
              <div className="col-6">
                <img
                  src={aboutimage03}
                  alt="about"
                  className="img-fluid"
                />
              </div>
              <div className="col-6">
                <img
                  src={aboutimage04}
                  alt="about"
                  className="img-fluid rounded-bottom-right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
