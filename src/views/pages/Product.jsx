import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar";
import DarkFooter from "components/Footers/DarkFooter";
import ProductPageHeader from "components/Headers/ProductPageHeader";
import ProductNav from "components/Products/ProductNav";
import ProductCard from "components/Products/ProductCard";

import { products } from "constants/products";

function Product() {
  const [activeProduct, setActiveProduct] = useState(null);
  const { productId } = useParams();
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
  });

  useEffect(() => {
    const product = products.find(
      (product) => product.productId === Number(productId)
    );

    setActiveProduct(product);
  }, [productId]); // Add products to dependencies array to ensure it's updated

  const handleProductClick = (product) => {
    setActiveProduct(product);
  };

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <ProductPageHeader activeProduct={activeProduct} />
        <div className="main" style={{ backgroundColor: "#eee" }}>
          <Row>
            <Col
              sm={3}
              style={{ minHeight: "100%" }}
              className="bg-dark text-white"
            >
              <ProductNav
                products={products}
                activeProduct={activeProduct}
                handleProductClick={handleProductClick}
              />
            </Col>
            <Col sm={9}>
              <ProductCard activeProduct={activeProduct} />
            </Col>
          </Row>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Product;
