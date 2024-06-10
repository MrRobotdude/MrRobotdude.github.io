import React, { useEffect, createRef } from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ProjectHeader() {
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
              "url(" + require("assets/img/projects-header.jpg") + ")",
            filter: "blur(2px)",
            backgroundSize: "cover",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container className=" slide-in-bottom">
            <h1 className="title">Our Projects</h1>
            <h3 className="mb-0">Delivering Excellence Across Indonesia</h3>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ProjectHeader;
