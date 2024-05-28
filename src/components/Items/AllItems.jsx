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
          <Col key={index} lg="4" md="6" sm="12">
            <Link
              className="h6 text-dark"
              to={`/${itemType}/${
                itemType === "products" ? item.productId : item.serviceId
              }`}
            >
              <Card>
                <CardHeader style={{height: "200px"}}>
                  <CardImg
                    alt="Sample"
                    src={require(`assets/img/ATS/${item.imageUrl[0].url}`)}
                    style={{height: "100%", objectFit: "cover"}}
                  />
                </CardHeader>
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
