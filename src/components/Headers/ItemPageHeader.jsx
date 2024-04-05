import HeaderCarousel from "components/Carousels/HeaderCarousel";
import React from "react";
import { Container } from "reactstrap";

function ItemPageHeader({ activeItem, itemType }) {
  return (
    <>
      <div className="page-header page-header-small" id="header-section">
        <HeaderCarousel item={activeItem} />
        <div className="content-center">
          <Container
            className="p-5"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <h1 className="title">
              {itemType &&
                (itemType === "products"
                  ? activeItem
                    ? activeItem.productName
                    : "All Products"
                  : activeItem
                  ? activeItem.serviceName
                  : "All Services")}
            </h1>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ItemPageHeader;
