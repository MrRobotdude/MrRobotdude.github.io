import React from "react";
import {
  TabContent,
  TabPane,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  CardLink,
} from "reactstrap";
import AllProducts from "./AllProducts";

function ProductCard({ activeProduct }) {
  return (
    <TabContent activeTab={activeProduct ? activeProduct.productId : "0"}>
      {activeProduct ? (
        <TabPane tabId={activeProduct.productId}>
          <Row>
            <Col sm="10">
              <Card body className="my-5 ml-5">
                <CardTitle tag="h3">{activeProduct.productName}</CardTitle>
                {activeProduct.productDesc.map((desc, index) => (
                  <CardText key={index}>{desc}</CardText>
                ))}
                <CardLink href={activeProduct.pdfUrl}>Download PDF</CardLink>
              </Card>
            </Col>
          </Row>
        </TabPane>
      ) : (
        <TabPane tabId="0">
          <Row>
            <Col sm="12">
              <AllProducts></AllProducts>
            </Col>
          </Row>
        </TabPane>
      )}
    </TabContent>
  );
}

export default ProductCard;
