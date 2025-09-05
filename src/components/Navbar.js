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
            >
              <NavDropdown.Item as={Link} to="/courses/course1">Course 1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/courses/course2">Course 2</NavDropdown.Item>
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
