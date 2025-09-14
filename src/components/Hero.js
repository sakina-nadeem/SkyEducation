import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../Assests/logo00.png";
import searchDark from "../Assests/searchicondark.png";
import searchWhite from "../Assests/searchiconwhite.png";
import courseData from "./CourseData";
import "./home.css";

function Hero() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [categorySearchTerm, setCategorySearchTerm] = useState("");
  const [courseSearchTerm, setCourseSearchTerm] = useState("");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showCourseDropdown, setShowCourseDropdown] = useState(false);
  const navigate = useNavigate();

  const categories = [
    { key: "ALL", name: "All Courses" },
    { key: "SEG", name: "Automotive & MOT" },
    { key: "VTCT", name: "Beauty & Aesthetics" },
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

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(categorySearchTerm.toLowerCase())
  );

  const filteredCourses = getCoursesForCategory().filter(course =>
    course.title.toLowerCase().includes(courseSearchTerm.toLowerCase())
  );

  const handleCategorySelect = (category) => {
    setSelectedCategory(category.key);
    setCategorySearchTerm(category.name);
    setSelectedCourse("");
    setCourseSearchTerm("");
    setShowCategoryDropdown(false);
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course.id);
    setCourseSearchTerm(course.title);
    setShowCourseDropdown(false);
  };

  const handleSearch = () => {
    if (selectedCategory === "VTCT") {
      window.open("https://skyaestheticstraining.co.uk/ ", "_blank");
      return;
    }
    
    if (selectedCourse) {
      // Navigate to specific course enrollment page
      const course = getCoursesForCategory().find(c => c.id === selectedCourse);
      if (course) {
        navigate('/enroll', { state: { course } });
      }
    } else if (selectedCategory) {
      // Navigate to courses page with selected category
      navigate('/courses', { state: { selectedCategory } });
    } else {
      // Navigate to general courses page
      navigate('/courses');
    }
  };
  return (
    <section
      className="hero-section text-light d-flex align-items-center position-relative"
      style={{ backgroundColor: "#02AEF1", width: "100vw", marginLeft: "calc(-50vw + 50%)" }} // 👈 updated styles
    >
      <Container className="pt-5">
        <Row className="align-items-center overflow-hidden">
          <Col md={7}>
            <small
              className="text-uppercase d-flex align-items-center ls-1"
              style={{ fontSize: "11px" }}
            >
              <img
                src={logo}
                alt="Logo"
                style={{ height: "20px", width: "auto", marginRight: "8px" }}
              />
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
          </Col>

          {/* Updated Search Box */}
          <div
            className="d-flex align-items-center justify-content-between bg-white shadow-sm px-2 px-sm-5 py-4 py-md-2 w-100 my-4 search-box overflow-hidden"
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
                  value={categorySearchTerm}
                  onChange={(e) => setCategorySearchTerm(e.target.value)}
                  onFocus={() => setShowCategoryDropdown(true)}
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
                {showCategoryDropdown && filteredCategories.length > 0 && (
                  <div className="position-absolute w-100 bg-white border rounded shadow-sm" style={{ top: "100%", zIndex: 1000, maxHeight: "200px", overflowY: "auto" }}>
                    {filteredCategories.map((category) => (
                      <div
                        key={category.key}
                        className="p-2 border-bottom cursor-pointer"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleCategorySelect(category)}
                        onMouseEnter={(e) => e.target.style.backgroundColor = "#f8f9fa"}
                        onMouseLeave={(e) => e.target.style.backgroundColor = "white"}
                      >
                        <small className="text-dark">{category.name}</small>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Course Name */}
            <div
              className="d-flex flex-column px-2 ms-sm-2 mb-2 mb-sm-0"
              style={{ minWidth: "230px", width: "280px" }}
            >
              <label className="blue mb-1 text-start fw-semibold">
                Course Name
              </label>
              <div className="search-input-wrapper position-relative">
                <Form.Control
                  type="text"
                  placeholder="Book your Course..."
                  value={courseSearchTerm}
                  onChange={(e) => setCourseSearchTerm(e.target.value)}
                  onFocus={() => setShowCourseDropdown(true)}
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
                {showCourseDropdown && filteredCourses.length > 0 && (
                  <div className="position-absolute w-100 bg-white border rounded shadow-sm" style={{ top: "100%", zIndex: 1000, maxHeight: "200px", overflowY: "auto" }}>
                    {filteredCourses.slice(0, 10).map((course) => (
                      <div
                        key={course.id}
                        className="p-2 border-bottom cursor-pointer"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleCourseSelect(course)}
                        onMouseEnter={(e) => e.target.style.backgroundColor = "#f8f9fa"}
                        onMouseLeave={(e) => e.target.style.backgroundColor = "white"}
                      >
                        <small className="text-dark fw-medium">{course.title}</small>
                      </div>
                    ))}
                  </div>
                )}
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