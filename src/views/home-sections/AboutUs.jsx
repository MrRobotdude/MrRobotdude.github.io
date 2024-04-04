import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
function AboutUs() {
  useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <div className="section section-about-us" id="about-us-section">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title">Who We Are?</h2>
            <h5 className="description">
              Alam Tehnik Semesta is a top customized compliance AHU
              manufacturer in Indonesia. Established in 1978 as a contractor and
              started manufacturing in 2008, now has been supplying more than
              1000 units across the country.
            </h5>
            <h5 className="description">
              We supply clean room HVAC, which comply with HVAC regulation based
              on CPOB (Indonesia BPOM standard), ISO standard, ISPE Standard,
              PICS and even for Hazardous Facility or Non-Hazardous Facility
              based on WHO standard Appendix 3.
            </h5>
            <Link
              to="/about-us"
              className="d-flex align-items-center justify-content-center text-info text-bold"
            >
              <h5 className="m-0">Learn More </h5>
              <i className="now-ui-icons arrows-1_minimal-right ml-1"></i>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;
