import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProjectCarousel from "components/Carousels/ProjectCarousel";

function Project() {
  return (
    <>
      <div className="section section-project text-center">
        <Container>
          <Row>
            <Col>
              <h2 className="text-center">Our Valued Clients</h2>
              <h4 className="description text-justify">
                At Alam Tehnik Semesta, our journey of excellence has seen us
                collaborate with numerous esteemed organizations across
                Indonesia. We take pride in the trust these companies place in
                us for their HVAC and AHU needs. Our tailored solutions,
                designed with cutting-edge technology and a commitment to
                regulatory compliance, ensure that we meet and exceed our
                clients' expectations. Our focus on durability and remote
                monitoring capabilities guarantees the highest quality and
                performance of our systems. Experience our expertise and the
                breadth of our projects, showcasing the notable companies that
                have chosen Alam Tehnik Semesta as their trusted partner.
              </h4>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section section-projects pt-0" id="products-section">
        <Container fluid className="p-5 d-inline">
          <ProjectCarousel />
        </Container>
      </div>
      <div className="section section-project text-center pt-0">
        <Container>
          <Row>
            <Col>
              <h4 className="description text-justify">
                "Customize For Compliance" - Your satisfaction is our priority.
                By leveraging cutting-edge technology, we ensure our HVAC
                systems are designed for durability, remote monitoring, and
                control, without compromising on regulatory standards.
              </h4>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Project;
