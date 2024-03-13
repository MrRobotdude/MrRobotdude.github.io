import React from "react";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

import { products } from "constants/products";
import { Link } from "react-router-dom";

function AllProducts() {
  console.log(products);
  return (
    <Row className="my-5 mx-5">
      {products.map((product, index) => (
        <Col key={index} md="4">
          <Link className="h6 text-dark" to={`/products/${product.productId}`}>
            <Card>
              <img alt="Sample" src={product.productImageUrl[0]} />
              <CardBody>
                <CardTitle tag="h5">{product.productName}</CardTitle>
              </CardBody>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
}

export default AllProducts;
