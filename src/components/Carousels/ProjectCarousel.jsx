import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, CardImg, CardHeader } from "reactstrap";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1200, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function ProjectCarousel() {
  const [deviceType, setDeviceType] = useState(null);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width >= 1200) {
        setDeviceType("desktop");
      } else if (width >= 464) {
        setDeviceType("tablet");
      } else {
        setDeviceType("mobile");
      }
    }

    handleResize(); // Call the function initially

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array to only run once on mount

  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      keyBoardControl={true}
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={deviceType}
      dotListClass="custom-dot-list-style"
      itemClass={`carousel-item-padding-40-px ${
        deviceType === "desktop" ? "mx-2" : ""
      }`}
      centerMode={false}
      partialVisible={true}
    >
      <Card style={{ overflow: "hidden" }}>
        <CardHeader style={{ height: "20vh", width: "100%", padding: 0 }}>
          <CardImg
            src={require("assets/img/ATS/Projects/Boerhinger Ingelheim.jfif")}
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </CardHeader>
      </Card>
      <Card style={{ overflow: "hidden" }}>
        <CardHeader style={{ height: "20vh", width: "100%", padding: 0 }}>
          <CardImg
            src={require("assets/img/ATS/Projects/ezgif.com-gif-maker.jpg")}
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </CardHeader>
      </Card>
      <Card style={{ overflow: "hidden" }}>
        <CardHeader style={{ height: "20vh", width: "100%", padding: 0 }}>
          <CardImg
            src={require("assets/img/ATS/Projects/Fahrenheit.png")}
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </CardHeader>
      </Card>
      <Card style={{ overflow: "hidden" }}>
        <CardHeader style={{ height: "20vh", width: "100%", padding: 0 }}>
          <CardImg
            src={require("assets/img/ATS/Projects/Logo_PT_Sido_Muncul.jpeg")}
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </CardHeader>
      </Card>
      <Card style={{ overflow: "hidden" }}>
        <CardHeader style={{ height: "20vh", width: "100%", padding: 0 }}>
          <CardImg
            src={require("assets/img/ATS/Projects/logo-great-giant-pineapple.jpg")}
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </CardHeader>
      </Card>
      <Card style={{ overflow: "hidden" }}>
        <CardHeader style={{ height: "20vh", width: "100%", padding: 0 }}>
          <CardImg
            src={require("assets/img/ATS/Projects/Medion.jpg")}
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </CardHeader>
      </Card>
      <Card style={{ overflow: "hidden" }}>
        <CardHeader style={{ height: "20vh", width: "100%", padding: 0 }}>
          <CardImg
            src={require("assets/img/ATS/Projects/Menarini.jfif")}
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </CardHeader>
      </Card>
      <Card style={{ overflow: "hidden" }}>
        <CardHeader style={{ height: "20vh", width: "100%", padding: 0 }}>
          <CardImg
            src={require("assets/img/ATS/Projects/pfizer.png")}
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </CardHeader>
      </Card>
      <Card style={{ overflow: "hidden" }}>
        <CardHeader style={{ height: "20vh", width: "100%", padding: 0 }}>
          <CardImg
            src={require("assets/img/ATS/Projects/pharos.png")}
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </CardHeader>
      </Card>
      <Card style={{ overflow: "hidden" }}>
        <CardHeader style={{ height: "20vh", width: "100%", padding: 0 }}>
          <CardImg
            src={require("assets/img/ATS/Projects/PT UltrA Sakti.jpg")}
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </CardHeader>
      </Card>
    </Carousel>
  );
}

export default ProjectCarousel;
