import React from "react";
import "./about.css";

const About = () => {
  return (
    <section
      className="py-5"
      style={{ backgroundColor: "#02AEF126" }}
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
              accessible education that equips our students with the skills and
              knowledge necessary to excel in their chosen fields.
            </p>
            <p className="mb-4">
              Our comprehensive curriculum is designed by industry experts to ensure
              relevance in today's competitive job market. We offer hands-on training,
              modern facilities, and personalized support to help each student
              achieve their full potential.
            </p>
            <p className="mb-4">
              Whether you're pursuing a career in healthcare, beauty therapy, or public
              service, our programs provide the foundation you need for long-term
              professional success. We believe in education that transforms lives
              and communities.
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
                  fontSize: "1.1rem"
                }}
              >
                Explore Our Programs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;