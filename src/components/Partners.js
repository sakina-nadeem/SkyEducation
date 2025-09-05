import React, { useState } from "react";
import backwardIcon from "../Assests/backwardicon.png";
import forwardIcon from "../Assests/forwardicon.png";
import "./home.css";

// Partner logos
import partner00 from "../Assests/partner00.png";
import partner01 from "../Assests/partner01.png";
import partner02 from "../Assests/partner02.png";
import partner03 from "../Assests/partner03.png";
import partner04 from "../Assests/partner04.png";
import partner05 from "../Assests/partner05.png";

function Partner() {
  const logos = [
    partner00,
    partner01,
    partner02,
    partner03,
    partner04,
    partner05,
    partner00,
    partner01,
    partner02,
    partner03,
  ];

  // Determine number of logos to show based on screen width
  const getVisibleCount = () => (window.innerWidth < 768 ? 3 : 5);

  const [startIdx, setStartIdx] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  // Update visibleCount on window resize
  React.useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
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
      style={{ height: "20vh" }}
    >
      {/* Backward Button */}
      <button
        onClick={() => scroll("left")}
        className=" partner-nav-btn"
        disabled={startIdx === 0}
      >
        <img
          src={backwardIcon}
          alt="Previous"
          className="partner-nav-icon"
        />
      </button>

      {/* Scrollable Logos */}
      <div
        className="d-flex overflow-hidden flex-nowrap mx-3 mx-lg-5 w-100 align-items-center justify-content-between partner-logos-container"
      >
        {logos.slice(startIdx, startIdx + visibleCount).map((logo, idx) => (
          <img
            key={startIdx + idx}
            src={logo}
            alt={`Partner ${startIdx + idx}`}
            className="partner-logo-img"
          />
        ))}
      </div>

      {/* Forward Button */}
      <button
        onClick={() => scroll("right")}
        className=" partner-nav-btn"
        disabled={startIdx >= logos.length - visibleCount}
      >
        <img
          src={forwardIcon}
          alt="Next"
          className="partner-nav-icon"
        />
      </button>
    </section>
  );
}

export default Partner;
