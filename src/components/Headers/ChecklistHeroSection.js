import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

const ChecklistHeroSection = ({ title, description }) => {
  return (
    <div className="position-relative">
      {/* shape Hero */}
      <section className="section section-lg section-shaped">
        <div className="shape shape-style-1 shape-default"></div>
        <Container className="py-lg-sm d-flex">
          <div className="col px-0">
            <Row className="row-grid">
              <Col lg="9">
                <h1 className="display-3 text-white">{title}</h1>
                <p className="lead text-white">{description}</p>
              </Col>
            </Row>
          </div>
        </Container>
        {/* SVG separator */}
        <div className="separator separator-bottom separator-skew">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
      {/* 1st Hero Variation */}
    </div>
  );
};
export default ChecklistHeroSection;
