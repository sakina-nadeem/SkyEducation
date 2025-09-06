import React, { useState, useMemo } from "react";
import { Container, Row, Col, Card, Button, Form, InputGroup, Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import courseData from "../components/CourseData";
import starIcon from "../Assests/staricon.png";
import searchIconDark from "../Assests/searchicondark.png";
import Footer from "../components/Footer";
import "./courses.css";

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("title");
  const [priceRange, setPriceRange] = useState("all");
  const navigate = useNavigate();

  const categories = [
    { key: "ALL", name: "All Courses", count: courseData.ALL.length },
    { key: "SEG", name: "Automotive & MOT", count: courseData.SEG.length },
    { key: "VTCT", name: "Beauty & Aesthetics", count: courseData.VTCT.length },
    { key: "PERSONS", name: "English & Math", count: courseData.PERSONS.length },
    { key: "PRO QUAL", name: "Security & Safety", count: courseData["PRO QUAL"].length },
    { key: "SQA", name: "Taxi & Private Hire", count: courseData.SQA.length },
    { key: "ICQ", name: "Education & Training", count: courseData.ICQ.length },
  ];

  const filteredAndSortedCourses = useMemo(() => {
    let courses = courseData[selectedCategory] || [];

    // Filter by search term
    if (searchTerm) {
      courses = courses.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.desc.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by price range
    if (priceRange !== "all") {
      switch (priceRange) {
        case "under200":
          courses = courses.filter(course => course.price < 200);
          break;
        case "200-400":
          courses = courses.filter(course => course.price >= 200 && course.price <= 400);
          break;
        case "400-600":
          courses = courses.filter(course => course.price >= 400 && course.price <= 600);
          break;
        case "over600":
          courses = courses.filter(course => course.price > 600);
          break;
        default:
          break;
      }
    }

    // Sort courses
    switch (sortBy) {
      case "price-low":
        courses.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        courses.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        courses.sort((a, b) => b.rating - a.rating);
        break;
      case "title":
      default:
        courses.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return courses;
  }, [selectedCategory, searchTerm, sortBy, priceRange]);

  const getCategoryBadgeColor = () => {
    // Always return primary (blue) for consistent branding
    return "primary";
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <img
        key={i}
        src={starIcon}
        alt="star"
        width="12"
        height="12"
        style={{
          opacity: i < Math.floor(rating) ? 1 : 0.3,
          marginRight: "2px"
        }}
      />
    ));
  };

  const handleEnrollClick = (course) => {
    navigate('/enroll', { state: { course } });
  };

  return (
    <div style={{ marginTop: "80px" }}>
      <Container fluid className="py-5">
        <Container>
          {/* Header Section */}
          <div className="text-center mb-5">
            <p className="text-uppercase fw-semibold text-primary mb-2">
              Explore Our Courses
            </p>
            <h1 className="fw-bold mb-3">Professional Training Programs</h1>
            <p className="text-muted lead">
              Advance your career with industry-recognized qualifications and expert training
            </p>
          </div>

          {/* Search and Filters */}
          <Row className="mb-4">
            <Col lg={6} className="mb-3">
              <InputGroup>
                <Form.Control
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-end-0"
                />
                <InputGroup.Text className="bg-white border-start-0">
                  <img src={searchIconDark} alt="search" width="16" height="16" />
                </InputGroup.Text>
              </InputGroup>
            </Col>
            <Col lg={3} className="mb-3">
              <Form.Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="title">Sort by Title</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </Form.Select>
            </Col>
            <Col lg={3} className="mb-3">
              <Form.Select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                <option value="all">All Prices</option>
                <option value="under200">Under $200</option>
                <option value="200-400">$200 - $400</option>
                <option value="400-600">$400 - $600</option>
                <option value="over600">Over $600</option>
              </Form.Select>
            </Col>
          </Row>

          <Row>
            {/* Category Sidebar */}
            <Col lg={3} className="mb-4">
              <Card className="shadow-sm">
                <Card.Header className="bg-primary text-white">
                  <h5 className="mb-0">Course Categories</h5>
                </Card.Header>
                <Card.Body className="p-0">
                  {categories.map((category) => (
                    <div
                      key={category.key}
                      className={`p-3 border-bottom cursor-pointer category-item ${
                        selectedCategory === category.key ? "active-category" : ""
                      }`}
                      onClick={() => setSelectedCategory(category.key)}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-medium">{category.name}</span>
                        <Badge 
                          bg={getCategoryBadgeColor()} 
                          className="ms-2"
                        >
                          {category.count}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>

            {/* Courses Grid */}
            <Col lg={9}>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="mb-0">
                  {categories.find(cat => cat.key === selectedCategory)?.name || "All Courses"}
                  <span className="text-muted fs-6 ms-2">
                    ({filteredAndSortedCourses.length} courses)
                  </span>
                </h4>
              </div>

              {filteredAndSortedCourses.length === 0 ? (
                <div className="text-center py-5">
                  <h5 className="text-muted">No courses found</h5>
                  <p className="text-muted">Try adjusting your search or filters</p>
                </div>
              ) : (
                <Row>
                  {filteredAndSortedCourses.map((course) => (
                    <Col lg={4} md={6} className="mb-4" key={`${course.id}-${selectedCategory}`}>
                      <Card className="h-100 shadow-sm border-0 course-card">
                        <div className="position-relative">
                          <Card.Img
                            variant="top"
                            src={course.img}
                            alt={course.title}
                            className="course-image"
                            style={{ height: "200px", objectFit: "cover" }}
                          />
                          <Badge
                            bg={getCategoryBadgeColor()}
                            className="position-absolute top-0 end-0 m-2"
                          >
                            {selectedCategory !== "ALL" ? selectedCategory : "Featured"}
                          </Badge>
                        </div>
                        <Card.Body className="d-flex flex-column">
                          <div className="mb-2">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="d-flex align-items-center">
                                {renderStars(course.rating)}
                                <small className="text-muted ms-1">({course.rating})</small>
                              </div>
                              <div>
                                <span className="text-danger fw-bold">${course.price}</span>
                                <small className="text-decoration-line-through text-muted ms-1">
                                  ${course.oldPrice}
                                </small>
                              </div>
                            </div>
                          </div>
                          <Card.Title className="fw-bold mb-2" style={{ fontSize: "1.1rem" }}>
                            {course.title}
                          </Card.Title>
                          <Card.Text className="text-muted flex-grow-1" style={{ fontSize: "0.9rem" }}>
                            {course.desc}
                          </Card.Text>
                          <div className="mt-auto">
                            <Button 
                              variant="primary" 
                              className="w-100 fw-medium enroll-btn"
                              style={{ backgroundColor: "#02AEF1", border: "none" }}
                              onClick={() => handleEnrollClick(course)}
                            >
                              ENROLL NOW
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              )}
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </div>
  );
};

export default CoursesPage;