import React from "react";
import "../components/about.css";
import "./aboutus.css";
import Testimonials from "../components/Testimonials";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";


const About = () => {
  return (
    <div>
      <section
        className="about-section text-dark d-flex align-items-center justify-content-center position-relative"
        style={{
          backgroundColor: "#02AEF1",
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          padding: "80px 20px",
        }}
      >
        <Container className="text-center">
          {/* Title */}
          <h2
            className="fw-bold mb-4 playfair-display-custom"
            style={{ fontSize: "40px", color: "#f8fcfdff", marginTop: "5rem" }}
          >
            About Us
          </h2>

          {/* Description */}
          <p
            className="mx-auto mb-5"
            style={{
              maxWidth: "750px",
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#f1f1f1ff",
            }}
          >
            At <strong>Sky Education</strong>, we are committed to empowering
            individuals through high-quality training and education. Our
            programs are designed to meet the needs of learners from diverse
            fields, ranging from health and beauty to public services and
            education.
          </p>

          {/* Features */}
          <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
            <div
              className="about-card p-4 rounded-4"
              style={{ width: "250px" }}
              tabIndex="0"
            >
              <h5 className="fw-semibold mb-2">Our Mission</h5>
              <p style={{ fontSize: "14px" }}>
                To foster lifelong learning by providing accessible and
                innovative education opportunities.
              </p>
            </div>

            <div
              className="about-card p-4 rounded-4"
              style={{ width: "250px" }}
              tabIndex="0"
            >
              <h5 className="fw-semibold mb-2">Our Vision</h5>
              <p style={{ fontSize: "14px" }}>
                To be a leader in education, empowering learners to achieve
                their dreams and shape a better future.
              </p>
            </div>

            <div
              className="about-card p-4 rounded-4"
              style={{ width: "250px" }}
              tabIndex="0"
            >
              <h5 className="fw-semibold mb-2">Why Choose Us?</h5>
              <p style={{ fontSize: "14px" }}>
                Expert trainers, flexible courses, and a supportive learning
                environment to ensure your success.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section
        className="py-5"
        style={{ backgroundColor: "#02AEF126", marginTop: "160px" }}
        id="about"
      >
        <div className="container">
          {/* Section Heading */}
          <div className="text-center mb-5">
            <h2
              className="fw-bold playfair-display-custom mb-3"
              style={{ color: "rgba(2, 174, 241, 1)" }}
            >
              Exceptional training across health,
              <br /> beauty, and public services.
            </h2>
            <p className="text-muted mb-0">
              Empowering students with practical skills for successful careers.
            </p>
          </div>

          {/* Content - Centered without images */}
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 text-center">
              <p className="mb-4">
                At Sky Education, we are dedicated to fostering learning and
                development across a broad spectrum of disciplines, from health
                and beauty to public services and education. Established in the
                UK, our institution is committed to providing high-quality,
                accessible education that equips our students with the skills
                and knowledge necessary to excel in their chosen fields.
              </p>
              <p className="mb-4">
                Our comprehensive curriculum is designed by industry experts to
                ensure relevance in today's competitive job market. We offer
                hands-on training, modern facilities, and personalized support
                to help each student achieve their full potential.
              </p>
              <p className="mb-4">
                Whether you're pursuing a career in healthcare, beauty therapy,
                or public service, our programs provide the foundation you need
                for long-term professional success. We believe in education that
                transforms lives and communities.
              </p>
              <div className="d-flex justify-content-center mt-4">
                <button
                  className="btn px-5 py-3 LearnButton"
                  style={{
                    backgroundColor: "#02AEF1",
                    borderColor: "#02AEF1",
                    color: "#fff",
                    borderRadius: "6px",
                    fontWeight: "600",
                    fontSize: "1.1rem",
                  }}
                >
                  Explore Our Programs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ marginTop: "9rem" }}>
        <Testimonials />
      </div>
      <Footer/>
    </div>
  );
};

export default About;
