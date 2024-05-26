import ContactModal from "components/Modals/ContactModal";
import React, { useCallback, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";

function Contact() {
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
    toggleModal("CP-002");
  }, [toggleModal]);

  const handleCustomerServiceButtonClick = useCallback(() => {
    toggleModal("CP-001");
  }, [toggleModal]);

  return (
    <>
      <div className="section section-contact-us text-center">
        <Container>
          <Row>
            <Col>
              <h2 className="text-center">Choose Your Method</h2>
              <h4 className="text-center">
                We will get back at you as soon as possible
              </h4>
            </Col>
          </Row>
          <Row>
            <Col lg="4" className="d-flex flex-column">
              <div className="team-player">
                <h4 className="title">Our Head Office</h4>
                <i
                  className="now-ui-icons location_pin"
                  style={{ fontSize: "64px" }}
                ></i>
                <p className="category text-info">PT. Alam Tehnik Semesta</p>
                <p className="description">
                  Villa, Jl. Pintu Besi I No.31 Blok A, Ps. Baru, Kecamatan
                  Sawah Besar, Jakarta, Daerah Khusus Ibukota Jakarta 10710
                </p>
                <div className="d-flex flex-column">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3966.788968027642!2d106.83287!3d-6.159012!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5c3b9605c0f%3A0x36c47167b84057b0!2sPT.%20Alam%20Tehnik%20Semesta!5e0!3m2!1sen!2sid!4v1710492436802!5m2!1sen!2sid"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="head-office"
                  />

                  <Button
                    className="btn-round"
                    color="info"
                    href="https://maps.app.goo.gl/JvDqstaxoKsz7vv39"
                    target="_blank"
                  >
                    <i className="now-ui-icons location_map-big mr-2" /> Open
                    Map
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="team-player">
                <h4 className="title">Message Us</h4>
                <i
                  className="fas fa-comments"
                  style={{ fontSize: "64px", marginBottom: "5px" }}
                ></i>
                <p className="category text-info">Contact Form</p>
                <p className="description text-justify">
                  We warmly welcome you to utilize our dedicated form for any
                  inquiries you may have. Please feel free to click on any of
                  the buttons below, as we're here to assist you with anything
                  you need.
                </p>
                <div className="d-flex flex-column">
                  <Button
                    className="btn-round"
                    color="info"
                    onClick={handleMarketingButtonClick}
                  >
                    Marketing
                  </Button>
                  <Button
                    className="btn-round"
                    color="info"
                    onClick={handleCustomerServiceButtonClick}
                  >
                    Customer Service
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="team-player">
                <h4 className="title">Our Contact Info</h4>
                <i
                  className="far fa-address-book"
                  style={{ fontSize: "64px", marginBottom: "5px" }}
                ></i>
                <p className="category text-info">Telephone</p>
                <p className="description m-0">
                  Telephone: (021) 3807931 - 3500586
                </p>
                <p className="description">Fax.: (021) 3803072</p>
                <p className="category text-info">Email</p>
                <p className="description m-0">
                  Customer Service: office@alamtehnik.com
                </p>
                <p className="description m-0">
                  Marketing: marketing@alamtehnik.com
                </p>
                <div className="d-flex flex-column">
                  <Button
                    className="btn-round"
                    color="info"
                    href="https://wa.me/628159088829"
                    target="_blank"
                  >
                    <i className="fab fa-whatsapp mr-2" /> Whatsapp
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <ContactModal
        modal={modal}
        toggleModal={toggleModal}
        selectedEmail={selectedEmail}
        setSelectedEmail={setSelectedEmail}
      />
    </>
  );
}

export default Contact;
