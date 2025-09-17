import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./about.css";

const About = () => {
  return (
    <section
      className="py-5"
      style={{ backgroundColor: "#02AEF126" }}
      id="about"
    >
      <Container>
        {/* Section Heading */}
        <Row className="justify-content-center text-center mb-5">
          <Col lg={10}>
            <h2
              className="fw-bold playfair-display-custom mb-3"
              style={{ color: "rgba(2, 174, 241, 1)" }}
            >
              Shaping Careers Through
              <br />
              Quality Education
            </h2>
            <p className="text-muted lead mb-0">
              Empowering students with practical skills for successful careers.
            </p>
          </Col>
        </Row>

        {/* Main Content */}
        <Row className="justify-content-center">
          <Col lg={10} xl={8}>
            <Row className="g-4">
              {/* Mission Statement */}
              <Col md={12} className="text-center mb-4">
                <p className="fs-5 text-dark mb-4 lh-base">
                  At Sky Education, we are dedicated to fostering learning and
                  development across a broad spectrum of disciplines, from ESOL
                  certificates to automotive, education, and public services.
                  Established in the UK, our institution is committed to providing
                  high-quality, accessible education that equips our students with
                  the skills and knowledge necessary to excel in their chosen fields.
                </p>
              </Col>

              {/* Key Features */}
              <Col md={6}>
                <div className="h-100 p-4 bg-white rounded-3 shadow-sm">
                  <h4 className="fw-semibold mb-3" style={{ color: "#02AEF1" }}>
                    Expert-Designed Curriculum
                  </h4>
                  <p className="mb-0 text-muted">
                    Our comprehensive curriculum is designed by industry experts to
                    ensure relevance in today's competitive job market. We offer
                    hands-on training, modern facilities, and personalized support
                    to help each student achieve their full potential.
                  </p>
                </div>
              </Col>

              <Col md={6}>
                <div className="h-100 p-4 bg-white rounded-3 shadow-sm">
                  <h4 className="fw-semibold mb-3" style={{ color: "#02AEF1" }}>
                    Transformative Education
                  </h4>
                  <p className="mb-0 text-muted">
                    Whether you're pursuing ESOL certification, automotive skills,
                    or public service careers, our programs provide the foundation
                    you need for long-term professional success. We believe in
                    education that transforms lives and communities.
                  </p>
                </div>
              </Col>
            </Row>

            {/* Call to Action */}
            <Row className="justify-content-center mt-5">
              <Col md={6} className="text-center">
                <Button
                  size="lg"
                  className="px-5 py-3 fw-semibold"
                  style={{
                    backgroundColor: "#02AEF1",
                    borderColor: "#02AEF1",
                    borderRadius: "8px",
                    fontSize: "1.1rem",
                    boxShadow: "0 4px 15px rgba(2, 174, 241, 0.3)",
                  }}
                >
                  Explore Our Programs
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;