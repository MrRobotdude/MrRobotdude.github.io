import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

function ItemSidebar({ items, activeItem, handleItemClick, itemType }) {
  const location = useLocation();

  const handleClick = (item) => {
    handleItemClick(item);
  };

  return (
    <Nav vertical tabs>
      <NavItem className="mx-auto mt-3">
        <NavLink
          tag={Link}
          to={`/${itemType}`}
          className={`text-white h6 ${
            !location.pathname.split("/")[2] && "active"
          }`}
          onClick={() => handleClick(null)}
        >
          All {itemType}
        </NavLink>
        {itemType === "products" &&
          items.map((item) => (
            <NavLink
              key={item.productId}
              tag={Link}
              to={`/${itemType}/${item.productId}`}
              className={`text-white h6 ${
                location.pathname.split("/")[2] === item.productId.toString() &&
                "active"
              }`}
              onClick={() => handleClick(item)}
            >
              {item.productName}
            </NavLink>
          ))}
        {itemType === "services" &&
          items.map((item) => (
            <NavLink
              key={item.serviceId}
              tag={Link}
              to={`/${itemType}/${item.serviceId}`}
              className={`text-white h6 ${
                location.pathname.split("/")[2] === item.serviceId.toString() &&
                "active"
              }`}
              onClick={() => handleClick(item)}
            >
              {item.serviceName}
            </NavLink>
          ))}
      </NavItem>
    </Nav>
  );
}

export default ItemSidebar;
