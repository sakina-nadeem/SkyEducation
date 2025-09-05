import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";

// Home Page Sections
import Hero from "./components/Hero";
import Partner from "./components/Partners";
import About from "./components/About";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Faqs from "./components/Faqs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Pages
import AboutUsPage from "./pages/About";
import FaqPage from "./pages/Faqs";   // dedicated about page
// you can also create src/pages/FaqPage.js and BlogPage.js if you want

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Partner />
              <About />
              <Courses />
              <Testimonials />
              <Newsletter />
              <Faqs />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* About Us Page */}
        <Route path="/about" element={<AboutUsPage />} />

        {/* FAQ Page */}
        <Route path="/faqs" element={<FaqPage />} />
       
      </Routes>
    </Router>
  );
};

export default App;
