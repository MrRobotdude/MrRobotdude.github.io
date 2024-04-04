import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const PageNotFound = () => {
  return (
    <>
      <div className="section section-images">
        <Container fluid>
          <Row>
            <img
              alt="..."
              src={require("assets/img/not-found.png")}
              className="mx-auto"
            />
          </Row>
          <Row>
            <div className="mx-auto">
              <h3>
                This page is not available yet! {" "}
                <Link to={"/"}>Back to Home</Link>
              </h3>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PageNotFound;
