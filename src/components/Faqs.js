import React, { useState } from "react";
import plusicon from "../Assests/plusicon.svg";
import crossicon from "../Assests/crossicon.svg";

const faqData = [
  {
    question: "Where courses are available?",
    answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore ismod nulla.",
  },
  {
    question: "Where courses are available?",
    answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore ismod nulla.",
  },
  {
    question: "Where courses are available?",
    answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore ismod nulla.",
  },
  {
    question: "Where courses are available?",
    answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore ismod nulla.",
  },
  {
    question: "Where courses are available?",
    answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore ismod nulla.",
  },
  {
    question: "Where courses are available?",
    answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore ismod nulla.",
  },
  {
    question: "Where courses are available?",
    answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore ismod nulla.",
  },
  
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-100"  id="faq">
        {/* Heading */}
        <h2
          className="text-center mb-5 fw-bolder"
          style={{ fontFamily: "playfair-display-custom" }}
        >
          Frequently Asked Questions
        </h2>
      <div style={{ backgroundColor: "rgba(217, 243, 253, 1)" , width: "100%"}} className="m-0 py-5">

        {/* FAQ Items */}
        <div className="mx-auto px-4" style={{ maxWidth: "800px" }}>
          {faqData.map((item, index) => (
            <div key={index} className="py-3" style={{ borderTop: "2px solid white" }}>
              {/* Question Row */}
              <div
                className="d-flex justify-content-between align-items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
                style={{ cursor: "pointer" }}
              >
                <h6 className="mb-0 fw-bold">{item.question}</h6>
                <img
                  src={openIndex === index ? crossicon : plusicon}
                  alt="icon"
                  width="18"
                  height="18"
                />
              </div>

              {/* Answer */}
              {openIndex === index && (
                <p className="mt-2 pt-2 mb-0 small" style={{ borderTop: "2px solid white" }}>
                  {item.answer}
                </p>
              )}
            </div>
          ))}
          {/* bottom white line */}
          <div className="mt-3" style={{ borderTop: "2px solid white" }}></div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
