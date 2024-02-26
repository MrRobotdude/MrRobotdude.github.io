/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
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
            className="content-center brand pt-5"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          >
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/ats-logo-only.png")}
            ></img>
            <h1 className="h1-seo">Alam Tehnik Semesta</h1>
            <h3>Air Specialist Company</h3>
          </div>
          <h6
            className="category category-absolute"
            style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
          >
            Call Center
            <a href="http://invisionapp.com/?ref=creativetim" target="_blank">
              &nbsp;(021) 3803072 - 3500586
            </a>
            . or Contact Us
            <a
              href="https://www.creative-tim.com?ref=nukr-index-header"
              target="_blank"
            >
              &nbsp;Now
            </a>
            .
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
