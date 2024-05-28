import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import { Card, CardTitle } from "reactstrap";
import { services } from "constants/services";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 2,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1200, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

function ServiceCarousel() {
  const [deviceType, setDeviceType] = useState(null);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width >= 1024) {
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
      itemClass="carousel-item-padding-40-px"
    >
      {services.map((service, index) => {
        const bgColor = index % 2 === 0 ? "bg-info" : "bg-light";
        const textTitle = index % 2 === 0 ? "text-dark" : "text-info";
        const textDesc = index % 2 === 0 ? "text-white" : "text-black";
        return (
          <Link to={`/services/${service.serviceId}`} key={index}>
            <Card
              className={`px-md-5 ${bgColor}`}
              style={{ overflow: "hidden", height: "300px" }}
            >
              <CardTitle
                className={`h3 font-weight-bold px-5 pt-5 ${textTitle}`}
              >
                {service.serviceName}
              </CardTitle>
              <div>
                {service.serviceSummary && (
                  <h5 className={`px-5 text-justify-desktop ${textDesc}`}>
                    {service.serviceSummary}
                  </h5>
                )}
                <br />
              </div>
            </Card>
          </Link>
        );
      })}
      <Link to={`/services`}>
        <Card
          className={`px-md-5 bg-light`}
          style={{ overflow: "hidden", height: "300px" }}
        >
          <CardTitle className={`h3 font-weight-bold px-5 pt-5 text-info`}>
            Learn More
          </CardTitle>
          <div>
            <h5 className={`px-5 text-black`}>
              Interested to see more? Click here
            </h5>
            <br />
          </div>
        </Card>
      </Link>
    </Carousel>
  );
}

export default ServiceCarousel;
