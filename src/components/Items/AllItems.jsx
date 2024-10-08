import React from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardHeader,
} from "reactstrap";
import { Link } from "react-router-dom";

function AllItems({ itemType, items }) {
  return (
    <Row>
      {items &&
        items.map((item, index) => (
          <Col key={index} md="4" sm="12" className="mb-4">
            <Link
              className="h6 text-dark"
              to={`/${itemType}/${
                itemType === "products" ? item.productId : item.serviceId
              }`}
            >
              <Card className="h-100">
                <CardHeader className="p-0" style={{ height: "200px" }}>
                  <div className="image-container">
                    <div className="image-wrapper">
                      <CardImg
                        alt="Sample"
                        src={require(`assets/img/ATS/${item.imageUrl[0].url}`)}
                        className="custom-card-img"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardBody className="d-flex flex-column">
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
