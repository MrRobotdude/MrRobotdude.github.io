import React from "react";
import { Container, Row, Col } from "reactstrap";
import PartnerCarousel from "components/Carousels/PartnerCarousel";

function Partner() {
  return (
    <>
      <div className="section section-partner text-center">
        <Container>
          <Row>
            <Col>
              <h2 className="text-center">
                Where Collaboration Meets Innovation
              </h2>
              <h4 className="description text-justify">
                We are excited to invite you to join us in our mission to
                redefine possibilities and shape the future. Together, let's
                create synergies, unlock potentials, and embark on a journey of
                mutual growth and success. Explore the opportunities awaiting
                you as we pave the way for impactful partnerships.
              </h4>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section section-partners pt-0" id="products-section">
        <Container fluid className="p-5 d-inline">
          <PartnerCarousel />
        </Container>
      </div>
    </>
  );
}

export default Partner;
