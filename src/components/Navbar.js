import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../Assests/logo00.png";
import "./home.css";

function NavigationBar() {
  const [showCourses, setShowCourses] = useState(false);

  return (
    <Navbar
      expand="lg"
      bg="white"
      fixed="top"
      className="shadow-sm py-2 px-lg-5"
    >
      <Container fluid className="px-4">
        {/* Logo goes to Home */}
        <Navbar.Brand as={Link} to="/" className="logo">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "55px", width: "auto" }}
          />
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle
          aria-controls="navbar-nav"
          style={{ border: "none", boxShadow: "none" }}
        />

        {/* Menu Items */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="align-items-lg-center fw-semibold custom-nav gap-2">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/faqs">FAQ</Nav.Link>
            <NavDropdown
              id="courses-dropdown"
              title={<span className="fw-bold">Courses</span>}
              show={showCourses}
              onMouseEnter={() => setShowCourses(true)}
              onMouseLeave={() => setShowCourses(false)}
              onClick={() => setShowCourses(!showCourses)}
              className="courses-mega-dropdown"
            >
              <div className="mega-dropdown-content p-2">
                <div className="row">
                  <div className="col-md-6">
                    <h6 className="dropdown-header text-primary fw-bold mb-1">
                      <i className="fas fa-graduation-cap me-2"></i>
                      Browse by Category
                    </h6>
                    <NavDropdown.Item as={Link} to="/courses" className="category-item">
                      <div className="d-flex align-items-center">
                       
                        <div className="flex-grow-1">
                          <div className="fw-semibold">Automotive & MOT</div>
                          <small className="text-muted">Professional vehicle testing</small>
                        </div>
                      </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/courses" className="category-item">
                      <div className="d-flex align-items-center">
                     
                        <div className="flex-grow-1">
                          <div className="fw-semibold">Beauty & Aesthetics</div>
                          <small className="text-muted">VTCT & ITEC qualifications</small>
                        </div>
                      </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/courses" className="category-item">
                      <div className="d-flex align-items-center">
                       
                        <div className="flex-grow-1">
                          <div className="fw-semibold">English & Math</div>
                          <small className="text-muted">Foundation to advanced levels</small>
                        </div>
                      </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/courses" className="category-item">
                      <div className="d-flex align-items-center">
                       
                        <div className="flex-grow-1">
                          <div className="fw-semibold">Security & Safety</div>
                          <small className="text-muted">Professional certifications</small>
                        </div>
                      </div>
                    </NavDropdown.Item>
                  </div>
                  <div className="col-md-6">
                    <h6 className="dropdown-header text-primary fw-bold mb-1">
                      <i className="fas fa-star me-2"></i>
                      Popular Courses
                    </h6>
                    <NavDropdown.Item as={Link} to="/courses" className="popular-item">
                      <div className="d-flex align-items-center">
                        
                        <div className="flex-grow-1">
                          <div className="fw-semibold">Level 4 Laser & IPL</div>
                          <small className="text-success">Most Popular</small>
                        </div>
                      </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/courses" className="popular-item">
                      <div className="d-flex align-items-center">
                       
                        <div className="flex-grow-1">
                          <div className="fw-semibold">MOT Class 4 & 7</div>
                          <small className="text-info">High Demand</small>
                        </div>
                      </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/courses" className="popular-item">
                      <div className="d-flex align-items-center">
                       
                        <div className="flex-grow-1">
                          <div className="fw-semibold">Level 3 Education & Training</div>
                          <small className="text-warning">Trending</small>
                        </div>
                      </div>
                    </NavDropdown.Item>
                    <div className="mt-2">
                      <NavDropdown.Item as={Link} to="/courses" className="view-all-btn">
                        <div className="text-center p-2 bg-primary text-white rounded">
                          <i className="fas fa-arrow-right me-2"></i>
                          View All Courses
                        </div>
                      </NavDropdown.Item>
                    </div>
                  </div>
                </div>
              </div>
            </NavDropdown>

            {/* Buttons */}
            <Button
              variant="outline-dark"
              size="sm"
              className="ms-2 my-2 my-lg-0 fw-semibold login-btn"
            >
              Login
            </Button>

            <Button
              size="sm"
              className="ms-2 my-2 my-lg-0 signup-btn"
              style={{
                backgroundColor: "#02AEF1",
                border: "none",
                color: "white",
              }}
            >
              Signup
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
