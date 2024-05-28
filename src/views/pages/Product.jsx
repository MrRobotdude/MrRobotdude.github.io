import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "reactstrap";

import ItemPageHeader from "components/Headers/ItemPageHeader";
import ItemSidebar from "components/Navbars/ItemSidebar";
import ItemCard from "components/Items/ItemCard";

import { products } from "constants/products";

function Product() {
  const { activeId } = useParams();
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  useEffect(() => {
    const product = products.find(
      (product) => product.productId === Number(activeId)
    );

    setActiveItem(product);
  }, [activeId]);

  const handleItemClick = (product) => {
    setActiveItem(product);
  };

  const backgroundStyle =
    activeItem && activeItem.bgImage
      ? {
          backgroundImage: `url(${require(`assets/img/ATS/${activeItem.bgImage}`)})`,
          backgroundSize: "cover",
        }
      : {};

  return (
    <>
      <div className="wrapper">
        <ItemPageHeader activeItem={activeItem} itemType="products" />
        <div className="main" style={{ backgroundColor: "#eee" }}>
          <Row>
            <Col
              lg={3}
              style={{ minHeight: "100%" }}
              className="bg-dark text-white d-none d-lg-block"
            >
              <ItemSidebar
                items={products}
                activeItem={activeItem}
                handleItemClick={handleItemClick}
                itemType="products"
              />
            </Col>
            <Col lg={9} xs={12} className="p-5" style={backgroundStyle}>
              <ItemCard
                activeItem={activeItem}
                items={products}
                itemType="products"
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Product;
