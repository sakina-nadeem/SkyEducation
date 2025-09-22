import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../Assests/logo00.png";
import searchWhite from "../Assests/searchiconwhite.png";
import courseData from "./CourseData";
import "./home.css";

// Partner logos
import partner01 from "../Assests/partner01.png";
import partner02 from "../Assests/partner02.png";
import partner04 from "../Assests/partner04.png";
import partner05 from "../Assests/partner05.png";
import partner06 from "../Assests/partner06.png";

function Hero() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [categorySearchTerm, setCategorySearchTerm] = useState("");
  const [courseSearchTerm, setCourseSearchTerm] = useState("");
  const navigate = useNavigate();

  // Use unique logos only (remove duplicates)
  const logos = [
    partner01,
    partner02,
    partner04,
    partner05,
    partner06
  ];

  const categories = [
    { key: "ALL", name: "All Courses" },
    { key: "SEG", name: "Automotive & MOT" },
    { key: "VTCT", name: "ESOL Certificates" },
    { key: "PERSONS", name: "English & Math" },
    { key: "PRO QUAL", name: "Security & Safety" },
    { key: "SQA", name: "Taxi & Private Hire" },
    { key: "ICQ", name: "Education & Training" },
  ];

  const getCoursesForCategory = () => {
    if (!selectedCategory || selectedCategory === "ALL") {
      return courseData.ALL;
    }
    return courseData[selectedCategory] || [];
  };


  const handleCategorySelect = (category) => {
    setSelectedCategory(category.key);
    setCategorySearchTerm(category.name);
    setSelectedCourse("");
    setCourseSearchTerm("");
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course.id);
    setCourseSearchTerm(course.title);
  };


  const handleSearch = () => {
    // Always navigate to enroll page when search button is clicked
    let courseData = null;
    
    if (selectedCourse && selectedCategory) {
      // If both category and course are selected, pass the specific course data
      const course = getCoursesForCategory().find(c => c.id === selectedCourse);
      if (course) {
        courseData = {
          course,
          category: selectedCategory,
          categoryName: categories.find(cat => cat.key === selectedCategory)?.name
        };
      }
    }
    
    // Navigate to enroll page with or without course data
    navigate('/enroll', { 
      state: courseData ? courseData : { selectedCategory, categoryName: categories.find(cat => cat.key === selectedCategory)?.name }
    });
  };
  return (
    <section
      className="hero-section text-light d-flex align-items-center position-relative"
      style={{ backgroundColor: "#02AEF1", width: "100vw", marginLeft: "calc(-50vw + 50%)" }} // 👈 updated styles
    >
      <Container className="pt-5">
        <Row className="align-items-center overflow-hidden">
          <Col md={6}>
            <small
              className="text-uppercase d-flex align-items-center ls-1"
              style={{ fontSize: "11px" }}
            >
              
              Learning, Education, Training
            </small>

            <h1 className="display-5 fw-bold mt-2 playfair-display-custom">
              Sky Education <br /> Manchester Reach <br /> For the Sky
            </h1>
            <p className="mt-3" style={{ fontSize: "12px" }}>
              At Sky Education, we are dedicated to fostering learning and
              development across a broad spectrum of disciplines, from health
              and beauty to public services and education.
            </p>
            <div className="mt-3 p-2 bg-light text-dark rounded-2 d-inline-block">
              <p className="mb-0 fw-bold" style={{ fontSize: "13px" }}>
                ✓ We only deliver Ofqual regulated courses
              </p>
            </div>
          </Col>

          <Col md={6} className="d-flex flex-column align-items-end justify-content-center">
            {/* Accreditation Logos Section */}
            <div className="mb-4">
              <div className="text-center mb-3">
                <p className="mb-0 text-light fw-medium" style={{ 
                  fontSize: "14px", 
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  opacity: "0.9"
                }}>
                  ACCREDITED BY
                </p>
              </div>
              
              <div className="d-flex align-items-center justify-content-center">
                <div
                  className="d-grid partner-logos-container"
                  style={{ 
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "0.8rem",
                    padding: "10px 0",
                    overflow: "visible",
                    maxWidth: "250px"
                  }}
                >
                  {logos.map((logo, idx) => (
                    <div 
                      key={idx} 
                      className="partner-logo-wrapper"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "12px",
                        borderRadius: "8px",
                        transition: "all 0.3s ease",
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        flexShrink: 0,
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                        width: "100px",
                        height: "65px"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 1)";
                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
                        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
                      }}
                    >
                      <img
                        src={logo}
                        alt={`Accredited by Partner ${idx + 1}`}
                        style={{
                          maxHeight: "40px",
                          maxWidth: "80px",
                          width: "auto",
                          height: "auto",
                          objectFit: "contain",
                          display: "block"
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>

          {/* Updated Search Box */}
          <div
            className="d-flex align-items-center justify-content-between bg-white shadow-sm px-2 px-sm-5 py-4 py-md-2 w-100 my-4 search-box overflow-hidden"
            style={{ maxWidth: "75%" }}
          >
            {/* Course Category */}
            <div
              className="d-flex flex-column px-2 mb-2 mb-sm-0"
              style={{ minWidth: "300px", width: "350px" }}
            >
              <label className="blue mb-1 text-start fw-semibold">
                Course Category
              </label>
              <div className="search-input-wrapper position-relative">
                <Form.Select
                  value={selectedCategory}
                  onChange={(e) => {
                    const categoryKey = e.target.value;
                    const category = categories.find(cat => cat.key === categoryKey);
                    if (category) {
                      handleCategorySelect(category);
                    }
                  }}
                  className="search-input border-0 border-bottom border-black rounded-0 shadow-none px-0"
                  style={{ width: "100%", backgroundColor: "transparent" }}
                >
                  <option value="">Select Course Category...</option>
                  {categories.map((category) => (
                    <option key={category.key} value={category.key}>
                      {category.name}
                    </option>
                  ))}
                </Form.Select>
              </div>
            </div>

            {/* Course Name */}
            <div
              className="d-flex flex-column px-2 ms-sm-2 mb-2 mb-sm-0"
              style={{ minWidth: "300px", width: "350px" }}
            >
              <label className="blue mb-1 text-start fw-semibold">
                Course Name
              </label>
              <div className="search-input-wrapper position-relative">
                <Form.Select
                  value={selectedCourse}
                  onChange={(e) => {
                    const courseId = parseInt(e.target.value);
                    const course = getCoursesForCategory().find(c => c.id === courseId);
                    if (course) {
                      handleCourseSelect(course);
                    }
                  }}
                  disabled={!selectedCategory}
                  className="search-input border-0 border-bottom border-black rounded-0 shadow-none px-0"
                  style={{ width: "100%", backgroundColor: "transparent" }}
                >
                  <option value="">
                    {selectedCategory ? "Select a Course..." : "First select a category"}
                  </option>
                  {selectedCategory && getCoursesForCategory().map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.title}
                    </option>
                  ))}
                </Form.Select>
              </div>
            </div>

            {/* Search Button */}
            <Button
              onClick={handleSearch}
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