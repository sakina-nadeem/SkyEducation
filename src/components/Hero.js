import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import logo from "../Assests/logo00.png";
import searchDark from "../Assests/searchicondark.png";
import searchWhite from "../Assests/searchiconwhite.png";
import "./home.css";

function Hero() {
  return (
    <section className="hero-section text-light d-flex align-items-center position-relative ">
      <Container className="pt-5">
        <Row className="align-items-center overflow-hidden">
          <Col md={7}>
            <small
              className="text-uppercase d-flex align-items-center ls-1 "
              style={{ fontSize: "11px" }}
            >
              <img
                src={logo}
                alt="Logo"
                style={{ height: "20px", width: "auto", marginRight: "8px" }}
              />
              Learning, Education, Training
            </small>

            <h1 className="display-5 fw-bold mt-2  playfair-display-custom">
              Sky Education <br /> Manchester Reach <br /> For the Sky
            </h1>
            <p className="mt-3" style={{ fontSize: "12px" }}>
              At Sky Education, we are dedicated to fostering learning and
              development across a broad spectrum of disciplines, from health
              and beauty to public services and education.
            </p>
          </Col>

          {/* Updated Search Box */}
          <div
            className=" d-flex align-items-center justify-content-between bg-white shadow-sm px-2 px-sm-5 py-4 py-md-2 w-100  my-4 search-box overflow-hidden"
            style={{ maxWidth: "75%" }}
          >
            {/* Course Category */}
            <div
              className="d-flex flex-column px-2 mb-2 mb-sm-0"
              style={{ minWidth: "230px", width: "280px" }}
            >
              <label className="blue mb-1 text-start fw-semibold">
                Course Category
              </label>
              <div className="search-input-wrapper position-relative">
                <Form.Control
                  type="text"
                  placeholder="Search your Course..."
                  className="search-input border-0 border-bottom border-black rounded-0 shadow-none px-0"
                  style={{ width: "100%" }}
                />
                <img
                  src={searchDark}
                  alt="Search Icon"
                  className="position-absolute"
                  style={{
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "18px",
                    height: "auto",
                  }}
                />
              </div>
            </div>

            {/* Course Name */}
            <div
              className="d-flex flex-column px-2 ms-sm-2 mb-2 mb-sm-0 "
              style={{ minWidth: "230px", width: "280px" }}
            >
              <label className="blue mb-1 text-start fw-semibold">
                Course Name
              </label>
              <div className="search-input-wrapper position-relative">
                <Form.Control
                  type="text"
                  placeholder="Book your Course..."
                  className="search-input border-0 border-bottom border-black rounded-0 shadow-none px-0"
                  style={{ width: "100%" }}
                />
                <img
                  src={searchDark}
                  alt="Search Icon"
                  className="position-absolute"
                  style={{
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "18px",
                    height: "auto",
                  }}
                />
              </div>
            </div>

            {/* Search Button */}
            <Button
              style={{
                backgroundColor: "#02AEF1",
                border: "none",
                height: "28px",
              }}
              className="rounded-pill px-4 py-4 mt-2 ms-sm-2 d-flex align-items-center justify-content-center search-btn"
            >
              Search
              <img
                src={searchWhite}
                alt="Search"
                style={{ width: "18px", marginLeft: "6px" }}
              />
            </Button>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
