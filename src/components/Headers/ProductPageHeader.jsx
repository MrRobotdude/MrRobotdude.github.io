import HeaderCarousel from "components/Carousels/HeaderCarousel";
import React from "react";
import { Container } from "reactstrap";

function ProductPageHeader({ activeProduct }) {
  return (
    <>
      <div className="page-header page-header-small" id="header-section">
        <HeaderCarousel product={activeProduct}></HeaderCarousel>

        <div className="content-center">
          <Container
            className="p-5"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <h1 className="title">
              {activeProduct ? activeProduct.productName : "All Products"}
            </h1>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ProductPageHeader;
