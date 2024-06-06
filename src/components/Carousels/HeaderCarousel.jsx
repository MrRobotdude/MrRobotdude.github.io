import React, { useState } from "react";

// reactstrap components
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";

const allItems = {
  imageUrl: [
    {
      url: "pharmaceutical production.jpg",
      caption: null,
    },
  ],
};

function HeaderCarousel({ item }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const imageUrl = item ? item.imageUrl : allItems.imageUrl;

  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === imageUrl.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? imageUrl.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const carouselItems = imageUrl.map((item, index) => ({
    src: item.url,
    altText: item.caption,
    key: index,
  }));

  if (!imageUrl[activeIndex]) setActiveIndex(0);

  return (
    <div
      className="clear-filter"
      filter-color="blue"
      style={{ height: "100%" }}
    >
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        className="carousel-height"
        
      >
        <CarouselIndicators
          items={carouselItems}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {imageUrl.map((item, index) => (
          <CarouselItem
            onExiting={onExiting}
            onExited={onExited}
            key={index}
            className="header-image"
          >
            <img
              src={require(`assets/img/ATS/${item.url}`)}
              alt={item.caption}
            />
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
