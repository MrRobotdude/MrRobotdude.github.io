import React from "react";
import {
  TabContent,
  TabPane,
  Card,
  CardTitle,
  CardText,
  CardLink,
  CardImg,
  Row,
} from "reactstrap";
import AllItems from "./AllItems";

function ItemCard({ activeItem, items, itemType }) {
  return (
    <>
      {itemType === "products" && (
        <TabContent activeTab={activeItem ? activeItem.productId : "0"}>
          {activeItem ? (
            <TabPane tabId={activeItem.productId}>
              <Card body className="p-5">
                <CardTitle tag="h3" className="font-weight-bold">
                  {activeItem.productName}
                </CardTitle>
                {activeItem.productDesc.map((desc, index) => (
                  <CardText
                    key={index}
                    tag={"h5"}
                    className="text-justify-desktop"
                  >
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
                <Row>
                  {activeItem.imageUrl.map((image, index) => (
                    // <Col key={index}>
                    <CardImg
                      src={require(`assets/img/ATS/${image.url}`)}
                      className="mb-4"
                      style={{
                        height: "200px",
                        width: "auto",
                        margin: "auto",
                      }}
                    />
                    // </Col>
                  ))}
                </Row>

                <CardTitle tag="h3" className="font-weight-bold">
                  For detailed information
                </CardTitle>
                <CardText tag={"h5"}>
                  Please check our documentation:
                  <br />
                  <CardLink
                    href={activeItem.pdfUrl}
                    download={activeItem.pdfUrl.split("/").pop()}
                  >
                    Download PDF
                  </CardLink>
                </CardText>
              </Card>
            </TabPane>
          ) : (
            <TabPane tabId="0">
              <AllItems itemType={"products"} items={items} />
            </TabPane>
          )}
        </TabContent>
      )}

      {itemType === "services" && (
        <TabContent activeTab={activeItem ? activeItem.serviceId : "0"}>
          {activeItem ? (
            <TabPane tabId={activeItem.serviceId}>
              <Card body className="p-5">
                <CardTitle tag="h3" className="font-weight-bold">
                  {activeItem.serviceName}
                </CardTitle>
                {activeItem.serviceDesc.map((desc, index) => (
                  <CardText
                    key={index}
                    tag={"h5"}
                    className="text-justify-desktop"
                  >
                    {desc}
                  </CardText>
                ))}
                <Row>
                  {activeItem.imageUrl.map((image, index) => (
                    // <Col key={index}>
                    <CardImg
                      src={require(`assets/img/ATS/${image.url}`)}
                      className="mb-4"
                      style={{
                        height: "200px",
                        width: "auto",
                        margin: "auto",
                      }}
                    />
                    // </Col>
                  ))}
                </Row>
              </Card>
            </TabPane>
          ) : (
            <TabPane tabId="0">
              <AllItems itemType={"services"} items={items} />
            </TabPane>
          )}
        </TabContent>
      )}
    </>
  );
}

export default ItemCard;
