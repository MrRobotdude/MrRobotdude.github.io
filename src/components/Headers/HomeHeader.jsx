/*eslint-disable*/
import React, { useEffect, createRef, Component } from "react";

// reactstrap components
import { Container, UncontrolledTooltip } from "reactstrap";
// core components

class CopyToClipboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNumber: "0213803072",
      secondNumber: "0213500586",
      clicked: "Click to Copy Number",
    };
  }

  copyFirstNumber = () => {
    navigator.clipboard
      .writeText(this.state.firstNumber)
      .then(() => {
        this.setState({ clicked: "Phone number copied to clipboard" });
      })
      .catch((err) => {
        this.setState({ clicked: "Failed to copy phone number" });
        console.error("Failed to copy first number: ", err);
      });
  };

  copySecondNumber = () => {
    navigator.clipboard
      .writeText(this.state.secondNumber)
      .then(() => {
        this.setState({ clicked: "Phone number copied to clipboard" });
      })
      .catch((err) => {
        this.setState({ clicked: "Failed to copy phone number" });
        console.error("Failed to copy second number: ", err);
      });
  };

  resetTooltip = () => {
    this.setState({ clicked: "Click to Copy Number" });
  };

  render() {
    return (
      <>
        <a
          href="#"
          onClick={this.copyFirstNumber}
          id="tooltipPhoneNumber"
          onMouseLeave={this.resetTooltip}
        >
          &nbsp;(021) 3803072
        </a>{" "}
        -{" "}
        <a
          href="#"
          onClick={this.copySecondNumber}
          id="tooltipPhoneNumber"
          onMouseLeave={this.resetTooltip}
        >
          3500586
        </a>
        <UncontrolledTooltip
          delay={0}
          placement="bottom"
          target="tooltipPhoneNumber"
        >
          {this.state.clicked}
        </UncontrolledTooltip>
      </>
    );
  }
}

function HomeHeader() {
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
  }, []);

  return (
    <>
      <div
        className="page-header clear-filter"
        filter-color="blue"
        id="header-section"
        style={{ height: "100vh" }}
      >
        <div className="page-header-image home-header-image" ref={pageHeader}/>
        {/* <Container>
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
            <h3 className="slide-in-bottom">Customize For Compliance</h3>
          </div>
        </Container> */}
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
            <CopyToClipboard />. or Contact Us
            <a href="contact-us">&nbsp;Now</a>.
          </h4>
        </div>
      </div>
    </>
  );
}

export default HomeHeader;
