import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "reactstrap";

import ItemPageHeader from "components/Headers/ItemPageHeader";
import ItemSidebar from "components/Navbars/ItemSidebar";
import ItemCard from "components/Items/ItemCard";

import { services } from "constants/services";

function Service() {
  const { activeId } = useParams();
  const [activeItem, setActiveItem] = useState(null);
  useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  useEffect(() => {
    const service = services.find(
      (service) => service.serviceId === Number(activeId)
    );

    setActiveItem(service);
  }, [activeId]); // Add products to dependencies array to ensure it's updated

  const handleItemClick = (service) => {
    setActiveItem(service);
  };

  return (
    <>
      <div className="wrapper">
        <ItemPageHeader activeItem={activeItem} itemType="services" />
        <div className="main" style={{ backgroundColor: "#eee" }}>
          <Row>
            <Col
              lg={3}
              style={{ minHeight: "100%" }}
              className="bg-dark text-white d-none d-lg-block"
            >
              <ItemSidebar
                items={services}
                activeItem={activeItem}
                handleItemClick={handleItemClick}
                itemType="services"
              />
            </Col>
            <Col lg={9} xs={12} className="p-5">
              <ItemCard
                activeItem={activeItem}
                items={services}
                itemType="services"
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Service;
