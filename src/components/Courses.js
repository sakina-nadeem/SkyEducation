import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
   
import fileIcon from "../Assests/fileregicon.png";   
import forwardIcon from "../Assests/forwardicon.png";  
import backwardIcon from "../Assests/backwardicon.png";  
import courseData from "./CourseData";

import "./courses.css";

const CoursesSection = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate();

  const categories = ["ALL", "SEG", "VTCT", "PERSONS", "PRO QUAL", "SQA", "ICQ"];

  // get courses based on selected category
  const courses = courseData[activeCategory] || [];

  // number of cards to show at once
  const itemsPerPage = 4;

  // slice courses for current "page"
  const visibleCourses = courses.slice(startIndex, startIndex + itemsPerPage);

  // backward button handler
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  // forward button handler
  const handleNext = () => {
    if (startIndex + itemsPerPage < courses.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  // handle enrollment navigation
  const handleEnrollClick = (course) => {
    navigate('/enroll', { state: { course } });
  };

  return (
    <section className="py-5 my-4" id="courses">
      <div className="container text-center">
        {/* Heading */}
        <p
          className="text-uppercase fw-semibold"
          style={{ color: "#02AEF1", fontSize: "0.85rem", letterSpacing: "0.1rem" }}
        >
          Our Courses
        </p>
        <h2 className="fw-bold playfair-display-custom">
          Discover the Right Course for You
        </h2>
        <p className="text-muted">
         Enhance your skills with industry-recognized courses designed for your success.
        </p>

        {/* Category Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-4 mb-4 mt-5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setStartIndex(0); // reset to first page when category changes
              }}
              className={`btn px-3 py-2 fw-lighter ${
                activeCategory === cat ? "active-btn " : "inactive-btn border-dark "
              }`}
              style={{ fontSize: "0.75rem" }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Grid with navigation icons */}
        <div className="d-flex align-items-center justify-content-center">
          {/* Backward Icon */}
          <button
            className="nav-btn me-2 me-lg-5"
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            <img src={backwardIcon} alt="Previous" width="12" />
          </button>

          <div className="row g-3 flex-grow-1 justify-content-center">
            {visibleCourses.map((course) => (
              <div key={course.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="card h-100 shadow-sm border rounded-4" style={{ maxWidth: "300px", margin: "0 auto" }}>
                  <div className="position-relative" style={{ height: "200px", overflow: "hidden" }}>
                    <img
                      src={course.img}
                      className="card-img-top rounded-top-4"
                      alt={course.title}
                      style={{ 
                        width: "100%", 
                        height: "100%", 
                        objectFit: "cover",
                        objectPosition: "center"
                      }}
                    />
                  </div>
                  <div className="card-body text-start d-flex flex-column" style={{ padding: "15px" }}>
                    <h6
                      className="fw-bold playfair-display-custom text-dark mb-2"
                      style={{ 
                        fontSize: "14px", 
                        lineHeight: "1.3",
                        height: "40px",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical"
                      }}
                      title={course.title}
                    >
                      {course.title}
                    </h6>
                    <p
                      className="text-muted mb-3"
                      style={{ 
                        fontSize: "11px",
                        lineHeight: "1.4",
                        height: "60px",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical"
                      }}
                      title={course.desc}
                    >
                      <img src={fileIcon} alt="file" width="10" height="14" className="me-1" />
                      {course.desc}
                    </p>
                    <button 
                      className="w-100 enroll-btn playfair-display-custom fw-medium py-2 mt-auto"
                      onClick={() => handleEnrollClick(course)}
                      style={{
                        fontSize: "12px",
                        borderRadius: "25px",
                        backgroundColor: "#02AEF1",
                        border: "none",
                        color: "white",
                        transition: "all 0.3s ease"
                      }}
                    >
                      ENROLL NOW
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Forward Icon */}
          <button
            className="nav-btn ms-2 ms-lg-5"
            onClick={handleNext}
            disabled={startIndex + itemsPerPage >= courses.length}
          >
            <img src={forwardIcon} alt="Next" width="12" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
