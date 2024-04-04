import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import {
  Card,
  CardImg,
  CardHeader,
  CardTitle,
  CardImgOverlay,
} from "reactstrap";
import { products } from "constants/products";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 20,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function ProductCarousel() {
  const [deviceType, setDeviceType] = useState(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [maxTitleHeight, setMaxTitleHeight] = useState(0);
  const [cardHeight, setCardHeight] = useState(0);
  const cardTitleRef = useRef(null);
  const cardRef = useRef(null);

  const handleCardMouseEnter = (index) => {
    setHoveredCardIndex(index);
  };

  const handleCardMouseLeave = () => {
    setHoveredCardIndex(null);
  };

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

  useEffect(() => {
    if (cardTitleRef.current) {
      setMaxTitleHeight(cardTitleRef.current.clientHeight);
    }
  }, [hoveredCardIndex]);

  useEffect(() => {
    if (cardTitleRef.current) {
      setMaxTitleHeight(cardTitleRef.current.clientHeight);
    }
  }, []); // Calculate max title height when component mounts

  useEffect(() => {
    if (cardRef.current) {
      setCardHeight(cardRef.current.clientHeight);
    }
  }, [hoveredCardIndex]);

  useEffect(() => {
    if (cardRef.current) {
      setCardHeight(cardRef.current.clientHeight);
    }
  }, []); // Calculate max title height when component mounts

  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      partialVisible={false}
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
      itemClass="carousel-item-padding-40-px mx-2 "
      centerMode={true}
    >
      {products.map((product, index) => {
        const isHovered = hoveredCardIndex === index;
        return (
          <Link to={`/products/${product.productId}`} key={index}>
            <Card
              onMouseEnter={() => handleCardMouseEnter(index)}
              onMouseLeave={handleCardMouseLeave}
              style={{ overflow: "hidden" }}
            >
              <CardHeader>
                <CardImg
                  src={product.imageUrl[0].url}
                  alt={product.productName}
                  className="preview-img"
                  ref={cardRef}
                />
                <CardImgOverlay
                  className={
                    "text-white overlay-product clear-filter " +
                    (hoveredCardIndex === index ? "slide-top" : "")
                  }
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    maxHeight: isHovered
                      ? cardHeight + "px"
                      : maxTitleHeight + 60 + "px",
                    top: isHovered ? "0" : "auto",
                  }}
                  filter-color="blue"
                >
                  <CardTitle
                    className={`product-title ${
                      isHovered ? "normal-title" : "truncated-title"
                    }`}
                    ref={cardTitleRef}
                  >
                    {product.productName}
                  </CardTitle>
                  {isHovered && (
                    <div>
                      {product.generalSpecification &&
                        product.generalSpecification.map((spec, i) => (
                          <div key={i}>
                            {spec.feature}: {spec.value}
                          </div>
                        ))}
                      <br />
                    </div>
                  )}
                </CardImgOverlay>
              </CardHeader>
            </Card>
          </Link>
        );
      })}
    </Carousel>
  );
}

export default ProductCarousel;
