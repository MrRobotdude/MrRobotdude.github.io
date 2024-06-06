import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Container, Col, Row } from "reactstrap";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container className="mb-3">
        <Row className="d-block d-lg-none">
          <Accordion allowMultipleExpanded allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span className="category mb-0">PT. Alam Tehnik Semesta</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <span className="mb-0 text-justify">
                  Villa, Jl. Pintu Besi I No.31 Blok A, Ps. Baru, Kecamatan
                  Sawah Besar, Jakarta, Daerah Khusus Ibukota Jakarta 10710
                </span>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span className="category mb-0">Email</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <span className="mb-0">
                  Customer Service: office@alamtehnik.com
                </span>
                <br />
                <span className="mb-0">
                  Marketing: marketing@alamtehnik.com
                </span>
                <br />
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span className="category mb-0">Telephone </span> <br />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <span className="mb-0">
                  Office Phone: (021) 3807931 - 3500586{" "}
                </span>{" "}
                <br />
                <span className="mb-0">Fax.: (021) 3803072</span>
                <br />
                <span>
                  Whatsapp{" "}
                  <Link to={"https://wa.me/628159088829"}>Click here</Link>
                </span>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </Row>
        <Row className="d-none d-lg-flex">
          <Col xs={12} lg={4}>
            <span className="category mb-0">PT. Alam Tehnik Semesta</span>
            <br />
            <span className="mb-0">
              Villa, Jl. Pintu Besi I No.31 Blok A, Ps. Baru,{" "}
            </span>
            <br />
            <span className="mb-0">
              {" "}
              Kecamatan Sawah Besar, Jakarta, Daerah
            </span>
            <br />
            <span className="mb-0">Khusus Ibukota Jakarta 10710</span>
            <br />
          </Col>
          <Col xs={12} lg={4} className="text-lg-center">
            <span className="category mb-0">Email</span>
            <br />
            <span className="mb-0">
              Customer Service: office@alamtehnik.com
            </span>
            <br />
            <span className="mb-0">Marketing: marketing@alamtehnik.com</span>
            <br />
          </Col>
          <Col xs={12} lg={4} className="text-lg-right">
            <span className="category mb-0">Telephone </span> <br />
            <span className="mb-0">
              Office Phone: (021) 3807931 - 3500586{" "}
            </span>{" "}
            <br />
            <span className="mb-0">Fax.: (021) 3803072</span>
            <br />
            <Link to={"https://wa.me/628159088829"}>
              <span>Whatsapp Click here</span>
            </Link>
          </Col>
        </Row>
      </Container>
      <Container>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"about-us"}>About Us</Link>
            </li>
            <li>
              <Link to={"services"}>Services</Link>
            </li>
            <li>
              <Link to={"products"}>Products</Link>
            </li>
            <li>
              <Link to={"partners"}>Partners</Link>
            </li>
            <li>
              <Link to={"contact-us"}>Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          Copyright © {new Date().getFullYear()}{" "}
          <a href="/">Alam Tehnik Semesta</a>. All Right Reserved.
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
