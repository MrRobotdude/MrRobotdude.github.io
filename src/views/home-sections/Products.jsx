import React from "react";
import { Container, Card, Button } from "reactstrap";
import { Link } from "react-router-dom";
import ProductCarousel from "components/Products/ProductCarousel";

function Products() {
  return (
    <div
      className="section section-products pt-6"
      id="products-section"
      style={{ backgroundColor: "#eee" }}
    >
      <h2 className="title text-center bg-info mb-0 pb-4 text-white">
        Products
      </h2>
      <Container fluid>
        <Card className="p-5 mt-3 d-flex justify-content-center">
          <ProductCarousel />
          <Link to="/products" className="mx-auto">
            <Button color="info">
              View All Products{" "}
              <i className="now-ui-icons arrows-1_minimal-right"></i>
            </Button>
          </Link>
        </Card>
      </Container>
    </div>
  );
}

export default Products;
