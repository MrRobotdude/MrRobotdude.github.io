/*eslint-disable*/
import React, { useEffect, useRef } from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function HomeHeader() {
  const pageHeader = useRef(null);

  useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className="page-header clear-filter"
        filter-color="blue"
        id="header-section"
        style={{ height: "100vh" }}
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(https://picsum.photos/1049/880?random=1)",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div
            className="content-center brand pt-5 mt-5"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          >
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/ats-logo-only.png")}
            ></img>
            <h1 className="h1-seo slide-in-bottom">Alam Tehnik Semesta</h1>
            <h3 className="slide-in-bottom">Air Specialist Company</h3>
          </div>
        </Container>
        <div className="text-center">
          <h4
            className="category category-absolute"
            style={{
              backgroundColor: "rgba(0, 0, 0, 1)",
              zIndex: 999,
              bottom: "10vh",
              top: "auto",
              fontWeight: "normal",
            }}
          >
            Call Center
            <a href="http://invisionapp.com/?ref=creativetim">
              &nbsp;(021) 3803072 - 3500586
            </a>
            . or Contact Us
            <a href="contact-us">&nbsp;Now</a>.
          </h4>
        </div>
      </div>
    </>
  );
}

export default HomeHeader;
