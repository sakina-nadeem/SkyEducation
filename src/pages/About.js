import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./aboutus.css"; 
import "../components/about.css";
import Tesimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const About = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  // Particles init
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="position-relative text-white min-vh-100 d-flex align-items-center justify-content-center"
        style={{
          background: "linear-gradient(135deg, #02AEF1 0%, #0EA5E9 100%)",
        }}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: true },
            particles: {
              number: { value: 80, density: { enable: true, area: 800 } },
              color: { value: "#ffffff" },
              shape: { type: "circle" },
              opacity: { value: 0.5 },
              size: { value: 3, random: true },
              links: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
              },
              move: { enable: true, speed: 6, outModes: { default: "out" } },
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" },
              },
            },
            detectRetina: true,
          }}
        />

        <div className="text-center position-relative" style={{ zIndex: 10 }}>
          <h1 className="display-1 fw-bold mb-3">About Us</h1>
          <p className="lead mb-5">
            At <strong>Sky Education</strong>, we empower individuals through
            high-quality training in health, beauty, public services, and
            education.
          </p>

          {/* Cards */}
          <div className="d-flex flex-wrap justify-content-center gap-4 about-cards-wrapper">
            <div
              className="card about-card shadow-lg text-center p-4"
              data-aos="fade-right"
            >
              <div className="icon-circle bg-primary text-white d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3">
                <i className="fas fa-bullseye fa-2x"></i>
              </div>
              <h3 className="h5 fw-bold mb-2">Our Mission</h3>
              <p className="text-muted">
                To foster lifelong learning by providing accessible and
                innovative education opportunities that transform lives.
              </p>
            </div>

            <div
              className="card about-card shadow-lg text-center p-4"
              data-aos="fade-up"
            >
              <div className="icon-circle bg-primary text-white d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3">
                <i className="fas fa-eye fa-2x"></i>
              </div>
              <h3 className="h5 fw-bold mb-2">Our Vision</h3>
              <p className="text-muted">
                To be a leader in education, empowering learners to achieve
                their dreams and shape a better future.
              </p>
            </div>

            <div
              className="card about-card shadow-lg text-center p-4"
              data-aos="fade-left"
            >
              <div className="icon-circle bg-primary text-white d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3">
                <i className="fas fa-star fa-2x"></i>
              </div>
              <h3 className="h5 fw-bold mb-2">Why Choose Us?</h3>
              <p className="text-muted">
                Expert trainers, flexible courses, and a supportive learning
                environment to ensure your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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

          {/* Content */}
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

      <Tesimonials />
      <Footer />
    </div>
  );
};

export default About;
