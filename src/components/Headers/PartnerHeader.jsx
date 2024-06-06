import React, { useEffect, createRef } from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function PartnerHeader() {
  let pageHeader = createRef();

  useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        if (pageHeader.current) {
          let windowScrollTop = window.pageYOffset / 3;
          pageHeader.current.style.transform =
            "translate3d(0," + windowScrollTop + "px,0)";
        }
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
        className="page-header page-header-small clear-filter"
        filter-color="blue"
        id="header-section"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/partners-header.jpg") + ")",
            filter: "blur(2px)",
            backgroundSize: "cover",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <div
              className="content-center brand py-5"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <h1 className="slide-in-bottom">Our Projects</h1>
              <h3 className="slide-in-bottom mb-0">
                Delivering Excellence Across Indonesia
              </h3>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default PartnerHeader;
