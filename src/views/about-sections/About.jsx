import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";

function About() {
  return (
    <>
      <div className="section section-about-us">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Who we are?</h2>
              <h5 className="description">
                Alam Tehnik Semesta is a top customized compliance AHU
                manufacturer in Indonesia. Established in 1978 as a contractor
                and started manufacturing in 2008, now has been supplying more
                than 1000 units across the country.
              </h5>
              <h5 className="description">
                We supply clean room HVAC, which comply with HVAC regulation
                based on CPOB (Indonesia BPOM standard), ISO standard, ISPE
                Standard, PICS and even for Hazardous Facility or Non-Hazardous
                Facility based on WHO standard Appendix 3.
              </h5>
            </Col>
          </Row>
          <div className="separator separator-primary"></div>
          <div className="section-story-overview">
            <Row>
              <Col md="6">
                <div
                  className="image-container image-left"
                  style={{
                    backgroundImage:
                      "url(https://picsum.photos/720/480?random=2)",
                  }}
                >
                  <p className="blockquote blockquote-info">
                    "Giving all the best from us, we can achieve customers'
                    satisfactions. And that is what we really care about."
                  </p>
                </div>
              </Col>
              <Col md="5">
                <div
                  className="image-container image-right"
                  style={{
                    backgroundImage:
                      "url(https://picsum.photos/1049/880?random=3)",
                  }}
                ></div>
                <h3 className="mb-0">Your satisfaction is our priority</h3>
                <h5 className="description">
                  As we do most of our design customized to our customer's
                  needs, therefore we ensure that we will work together to
                  achieve the best product, without compromising any regulation
                  standards.
                </h5>
              </Col>
            </Row>
            <Row>
              <Col md="10" className="ml-auto mr-auto text-center">
                <h5 className="description">
                  We always update ourselves with high technology for our HVAC
                  system, and this makes it possible for remote HVAC monitoring
                  and control. Durability of our products is also one of out top
                  priorities when we do our design, resulting the best quality
                  of AHU manufactured.
                </h5>
              </Col>
            </Row>
            <div className="d-flex justify-content-center">
              <Link to="/contact-us" className="mx-auto">
                <Button size="lg" className="btn-round" color="info">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default About;
