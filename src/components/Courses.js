import React, { useState } from "react";
import starIcon from "../Assests/staricon.png";   
import fileIcon from "../Assests/fileregicon.png";   
import forwardIcon from "../Assests/forwardicon.png";  
import backwardIcon from "../Assests/backwardicon.png";  
import courseData from "./CourseData";

import "./courses.css";

const CoursesSection = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [startIndex, setStartIndex] = useState(0);

  const categories = ["ALL", "QUALIFI", "VTCT", "PERSONS", "PRO QUAL", "SQA", "ICQ"];

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
          Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin neque.
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
        <div className="d-flex align-items-center">
          {/* Backward Icon */}
          <button
            className="nav-btn me-2 me-lg-5"
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            <img src={backwardIcon} alt="Previous" width="12" />
          </button>

          <div className="row g-4 flex-grow-1">
            {visibleCourses.map((course) => (
              <div key={course.id} className="col-lg-3 col-md-6 col-6">
                <div className="card h-100 shadow-sm border rounded-4">
                  <img
                    src={course.img}
                    className="card-img-top rounded-top-4"
                    alt={course.title}
                  />
                  <div className="card-body text-start">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span
                        className="text-primary d-flex align-items-center gap-1"
                        style={{ fontSize: "12px" }}
                      >
                        <img src={starIcon} alt="star" width="14" height="14" />{" "}
                        {course.rating}
                      </span>
                      <span>
                        <span style={{ color: "#FF0000", fontSize: "14px" }}>
                          ${course.price}
                        </span>{" "}
                        <small
                          className="text-decoration-line-through opacity-50"
                          style={{ color: "#7C7C7C", fontSize: "12px" }}
                        >
                          ${course.oldPrice}
                        </small>
                      </span>
                    </div>
                    <h6
                      className="fw-bold playfair-display-custom text-dark"
                      style={{ fontSize: "15px" }}
                      title={course.title}
                    >
                      {course.title}
                    </h6>
                    <p
                      className="text-muted mb-3 d-flex align-items-center gap-2 text-truncate"
                      style={{ fontSize: "12px" }}
                      title={course.desc}
                    >
                      <img src={fileIcon} alt="file" width="10" height="14" />{" "}
                      {course.desc}
                    </p>
                    <button className=" w-100 enroll-btn playfair-display-custom fw-medium py-2">
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
