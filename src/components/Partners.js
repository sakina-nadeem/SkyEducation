import React from "react";
import "./home.css";

// Partner logos
import partner01 from "../Assests/partner01.png";
import partner02 from "../Assests/partner02.png";
import partner04 from "../Assests/partner04.png";
import partner05 from "../Assests/partner05.png";
import partner06 from "../Assests/partner06.png";

function Partner() {
  // Use unique logos only (remove duplicates)
  const logos = [
    partner01,
    partner02,
    partner04,
    partner05,
    partner06
  ];

  return (
    <section
      className="partners-section bg-white border-bottom"
      style={{ 
        paddingTop: "180px", 
        paddingBottom: "20px",
        borderBottom: "1px solid #e9ecef",
        marginTop: "0px"
      }}
    >
      <div className="container">
        {/* Partners Header */}
        <div className="text-center  mt-20 mb-3">
          <p className="mb-0 text-muted fw-medium" style={{ 
            fontSize: "14px", 
            letterSpacing: "1px",
            textTransform: "uppercase"
          }}>
            ACCREDITED BY
          </p>
        </div>

        {/* All Partners Container - Single Line */}
        <div className="d-flex align-items-center justify-content-center">
          <div
            className="d-flex align-items-center justify-content-center flex-nowrap"
            style={{ 
              gap: "clamp(0.5rem, 3vw, 2rem)",
              padding: "10px 0",
              maxWidth: "100%",
              overflow: "hidden",
              width: "100%"
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
                  padding: "clamp(5px, 1vw, 10px)",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  filter: "grayscale(100%)",
                  opacity: "0.7",
                  backgroundColor: "transparent",
                  flexShrink: 1,
                  minWidth: 0,
                  flex: "1 1 auto"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "grayscale(0%)";
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.backgroundColor = "#f8f9fa";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "grayscale(100%)";
                  e.currentTarget.style.opacity = "0.7";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <img
                  src={logo}
                  alt={`Partner ${idx + 1}`}
                  style={{
                    maxHeight: "clamp(30px, 5vw, 50px)",
                    maxWidth: "clamp(70px, 12vw, 110px)",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain"
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partner;