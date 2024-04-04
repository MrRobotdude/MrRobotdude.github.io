import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Container, Col, Row } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container className="mb-3">
        <Row>
          <Col>
            <span className="category mb-0">PT. Alam Tehnik Semesta</span>
            <br />
            <span className="mb-0">Villa, Jl. Pintu Besi I No.31 Blok A,</span>
            <br />
            <span className="mb-0"> Ps. Baru, Kecamatan Sawah Besar,</span>
            <br />
            <span className="mb-0">
              Jakarta, Daerah Khusus Ibukota Jakarta 10710
            </span>
            <br />
          </Col>
          <Col className="text-center">
            <span className="category mb-0">Email</span>
            <br />
            <span className="mb-0">
              Customer Service: office@alamtehnik.com
            </span>
            <br />
            <span className="mb-0">Marketing: marketing@alamtehnik.com</span>
            <br />
          </Col>
          <Col className="text-right">
            <span className="category mb-0">Telephone </span> <br />
            <span className="mb-0">
              Office Phone: (021) 3807931 - 3500586{" "}
            </span>{" "}
            <br />
            <span className="mb-0">Fax.: (021) 3803072</span>
            <br />
            <span>
              Whatsapp <Link to={"https://wa.me/628159088829"}>Click here</Link>
            </span>
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
              <Link to={"news"}>News</Link>
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
