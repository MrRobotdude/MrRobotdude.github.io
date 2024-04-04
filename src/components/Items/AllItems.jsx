import React from "react";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

function AllItems({ itemType, items }) {
  return (
    <Row className="my-5 mx-5">
      {items &&
        items.map((item, index) => (
          <Col key={index} lg="4">
            <Link
              className="h6 text-dark"
              to={`/${itemType}/${
                itemType === "products" ? item.productId : item.serviceId
              }`}
            >
              <Card>
                <img alt="Sample" src={item.imageUrl[0].url} />
                <CardBody>
                  <CardTitle tag="h6" className="m-0">
                    {itemType === "products"
                      ? item.productName
                      : item.serviceName}
                  </CardTitle>
                </CardBody>
              </Card>
            </Link>
          </Col>
        ))}
    </Row>
  );
}

export default AllItems;
