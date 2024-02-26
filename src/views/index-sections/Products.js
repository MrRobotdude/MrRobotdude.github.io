import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  CardHeader,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import { products } from "constants/products";
function Products() {
  const [activeTab, setActiveTab] = useState(0);

  const toggle = (tabIndex) => {
    if (activeTab !== tabIndex) {
      setActiveTab(tabIndex);
    }
  };
  return (
    <div className="section section-products mb-5" id="products-section">
      <Container>
        <Card className="card-nav-tabs card-plain">
          <CardHeader className="card-header-danger">
            <div className="nav-tabs-navigation">
              <div className="nav-tabs-wrapper">
                <Nav data-tabs="tabs" tabs className="justify-content-center">
                  {products.map((product, index) => (
                    <NavItem key={product.productId}>
                      <NavLink
                        className={activeTab === index ? "active" : ""}
                        onClick={() => toggle(index)}
                      >
                        {product.productName}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
              </div>
            </div>
          </CardHeader>
          <CardBody>
            <TabContent className="text-center" activeTab={activeTab}>
              {products.map((product, index) => (
                <TabPane key={product.productId} tabId={index}>
                  <CardImg
                    src={product.productImageUrl[0]}
                    alt={product.productName}
                    className="preview-img"
                  />
                  <h4>{product.productName}</h4>
                  <p>{product.productDesc[0]}</p>
                  <a href="#">Learn More</a>
                </TabPane>
              ))}
            </TabContent>
          </CardBody>
        </Card>
      </Container>
      <Container fluid>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title">Products</h2>
          </Col>
        </Row>
        <Row>
          {products.map((product) => (
            <Col md="4">
              <Card className="product-container">
                <CardBody key={product.productId} className="image-preview">
                  <CardImg
                    src={product.productImageUrl[0]}
                    alt={product.productName}
                    className="preview-img"
                  />
                  <CardImg
                    src={product.productImageUrl[1]}
                    alt={product.productName}
                    className="hover-img d-none"
                  />
                  <span className="overlay">
                    <div className="desc">
                      <CardTitle>{product.productName}</CardTitle>
                      <CardText>{product.productDesc[0]}</CardText>
                    </div>
                  </span>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Products;
