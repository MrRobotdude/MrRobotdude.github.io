import React from "react";

// reactstrap components
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";

const defaultProduct = {
  productImageUrl: ["https://picsum.photos/1280/720?random=25"],
  productName: "All Products",
};

function HeaderCarousel({ product }) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const { productImageUrl, productName } = product ? product : defaultProduct;

  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === productImageUrl.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? productImageUrl.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const carouselItems = productImageUrl.map((item, index) => ({
    src: item,
    altText: productName,
    key: index,
  }));

  return (
    <div
      style={{
        backgroundImage: `url(${productImageUrl[activeIndex]})`,
        backgroundSize: "cover",
        minWidth: "100vw",
      }}
    >
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={carouselItems}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {productImageUrl.map((item, index) => (
          <CarouselItem
            onExiting={onExiting}
            onExited={onExited}
            key={index}
            className="header-image"
          >
            <img src={item} alt={productName} />
          </CarouselItem>
        ))}
        <a
          className="carousel-control-prev"
          data-slide="prev"
          href="#pablo"
          onClick={(e) => {
            e.preventDefault();
            previous();
          }}
          role="button"
        >
          <i className="now-ui-icons arrows-1_minimal-left"></i>
        </a>
        <a
          className="carousel-control-next"
          data-slide="next"
          href="#pablo"
          onClick={(e) => {
            e.preventDefault();
            next();
          }}
          role="button"
        >
          <i className="now-ui-icons arrows-1_minimal-right"></i>
        </a>
      </Carousel>
    </div>
  );
}

export default HeaderCarousel;
