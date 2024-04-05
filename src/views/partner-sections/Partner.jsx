import ContactModal from "components/Modals/ContactModal";
import React, { useCallback, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";

function Partner() {
  const [modal, setModal] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState("");

  const toggleModal = useCallback(
    (title) => {
      setModal(!modal);
      setSelectedEmail(title);
    },
    [modal]
  );

  const handleMarketingButtonClick = useCallback(() => {
    toggleModal("marketing");
  }, [toggleModal]);

  const handleCustomerServiceButtonClick = useCallback(() => {
    toggleModal("customer_service");
  }, [toggleModal]);

  return (
    <>
      <div className="section section-partner text-center">
        <Container>
          <Row>
            <Col>
              <h2 className="text-center">
                Where Collaboration Meets Innovation
              </h2>
              <h4 className="text-center">
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
    </>
  );
}

export default Partner;
