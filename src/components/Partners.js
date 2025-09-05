import React, { useState, useEffect } from "react";
import backwardIcon from "../Assests/backwardicon.png";
import forwardIcon from "../Assests/forwardicon.png";
import "./home.css";


// Partner logos
import partner01 from "../Assests/partner01.png";
import partner02 from "../Assests/partner02.png";
import partner04 from "../Assests/partner04.png";
import partner05 from "../Assests/partner05.png";
import partner06 from "../Assests/partner06.png";

function Partner() {
  const logos = [
    partner01,
    partner02,
    partner04,
    partner05,
    partner06,
    partner01,
    partner02,
    partner04,
    partner05,
    partner06
  ];

  const [startIdx, setStartIdx] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4); // Always show 4 logos

  // Handle window resize to maintain 4 logos visible
  useEffect(() => {
    const handleResize = () => {
      // Always keep 4 logos visible regardless of screen size
      setVisibleCount(4);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scroll = (direction) => {
    if (direction === "left") {
      setStartIdx((prev) => Math.max(prev - 1, 0));
    } else {
      setStartIdx((prev) => Math.min(prev + 1, logos.length - visibleCount));
    }
  };

  return (
    <section
      className="position-relative d-flex align-items-center bg-light px-1 px-lg-5"
      style={{ height: "20vh", minHeight: "150px" }}
    >
      {/* Backward Button - Only show if there are items to the left */}
      {startIdx > 0 && (
        <button
          onClick={() => scroll("left")}
          className="partner-nav-btn"
          disabled={startIdx === 0}
        >
          <img
            src={backwardIcon}
            alt="Previous"
            className="partner-nav-icon"
          />
        </button>
      )}

      {/* Scrollable Logos */}
      <div
        className="d-flex overflow-hidden flex-nowrap mx-3 mx-lg-5 w-100 align-items-center justify-content-center partner-logos-container"
      >
        {logos.slice(startIdx, startIdx + visibleCount).map((logo, idx) => (
          <div key={startIdx + idx} className="partner-logo-wrapper">
            <img
              src={logo}
              alt={`Partner ${startIdx + idx + 1}`}
              className="partner-logo-img"
            />
          </div>
        ))}
      </div>

      {/* Forward Button - Only show if there are items to the right */}
      {startIdx < logos.length - visibleCount && (
        <button
          onClick={() => scroll("right")}
          className="partner-nav-btn"
          disabled={startIdx >= logos.length - visibleCount}
        >
          <img
            src={forwardIcon}
            alt="Next"
            className="partner-nav-icon"
          />
        </button>
      )}
    </section>
  );
}

export default Partner;