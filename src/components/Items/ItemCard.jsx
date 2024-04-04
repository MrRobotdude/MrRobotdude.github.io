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
  CardImg,
} from "reactstrap";
import AllItems from "./AllItems";

function ItemCard({ activeItem, items, itemType }) {
  return (
    <>
      {itemType === "products" && (
        <TabContent activeTab={activeItem ? activeItem.productId : "0"}>
          {activeItem ? (
            <TabPane tabId={activeItem.productId}>
              <Row>
                <Col sm="10">
                  <Card body className="my-5 ml-5 p-5">
                    <CardTitle tag="h3" className="font-weight-bold">
                      {activeItem.productName}
                    </CardTitle>
                    {activeItem.productDesc.map((desc, index) => (
                      <CardText key={index} tag={"h5"}>
                        {desc}
                      </CardText>
                    ))}
                    {activeItem.generalSpecification && (
                      <>
                        <CardTitle tag="h3" className="font-weight-bold">
                          General Specification
                        </CardTitle>
                        {activeItem.generalSpecification.map((spec, i) => (
                          <CardText key={i} tag={"h5"} className="m-0">
                            {spec.feature}: {spec.value}
                          </CardText>
                        ))}
                      </>
                    )}
                    <CardTitle tag="h3" className="font-weight-bold mt-3">
                      Photo of Products
                    </CardTitle>
                    {activeItem.imageUrl.map((image, index) => (
                      <CardText key={index} tag={"h5"}>
                        {image.caption}
                        <CardImg src={image.url} alt="" />
                      </CardText>
                    ))}

                    <CardTitle tag="h3" className="font-weight-bold mt-3">
                      For detailed information
                    </CardTitle>
                    <CardText tag={"h5"}>
                      Please check our documentation:
                      <CardLink href={activeItem.pdfUrl}>
                        {" "}
                        Download PDF
                      </CardLink>
                    </CardText>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          ) : (
            <TabPane tabId="0">
              <Row>
                <Col sm="12">
                  <AllItems itemType={"products"} items={items} />
                </Col>
              </Row>
            </TabPane>
          )}
        </TabContent>
      )}

      {itemType === "services" && (
        <TabContent activeTab={activeItem ? activeItem.serviceId : "0"}>
          {activeItem ? (
            <TabPane tabId={activeItem.serviceId}>
              <Row>
                <Col sm="10">
                  <Card body className="my-5 ml-5 p-5">
                    <CardTitle tag="h3" className="font-weight-bold">
                      {activeItem.serviceName}
                    </CardTitle>
                    {activeItem.serviceDesc.map((desc, index) => (
                      <CardText key={index} tag={"h5"}>
                        {desc}
                      </CardText>
                    ))}
                    {activeItem.imageUrl.map((image, index) => (
                      <CardText key={index} tag={"h5"}>
                        {image.caption}
                        <CardImg src={image.url} alt="" />
                      </CardText>
                    ))}
                  </Card>
                </Col>
              </Row>
            </TabPane>
          ) : (
            <TabPane tabId="0">
              <Row>
                <Col sm="12">
                  <AllItems itemType={"services"} items={items} />
                </Col>
              </Row>
            </TabPane>
          )}
        </TabContent>
      )}
    </>
  );
}

export default ItemCard;
