import React from "react";
import { Container, Button } from "reactstrap";
import { Link } from "react-router-dom";
import ProductCarousel from "components/Carousels/ProductCarousel";

function Products() {
  return (
    <div className="section section-products pt-0" id="products-section">
      <Container fluid className="p-5 d-inline">
        <h2 className="title text-center text-info">Products</h2>
        <ProductCarousel />
        <div className="d-flex">
          <Link to="/products" className="mx-auto">
            <Button color="info">
              View All Products{" "}
              <i className="now-ui-icons arrows-1_minimal-right"></i>
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Products;
