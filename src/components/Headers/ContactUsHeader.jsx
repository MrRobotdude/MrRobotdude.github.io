import React, { useEffect, createRef } from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ContactUsHeader() {
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
      <div className="page-header page-header-small clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/contact-us-header.jpg") + ")",
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
              <h1 className="slide-in-bottom">Reach Out To Us!</h1>
              <h3 className="slide-in-bottom mb-0">
                We'd love to hear from you
              </h3>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ContactUsHeader;
