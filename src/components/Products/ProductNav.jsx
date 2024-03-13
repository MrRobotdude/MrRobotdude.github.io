import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

function ProductNav({ products, activeProductId, handleProductClick }) {
  const handleClick = (product) => {
    handleProductClick(product);
  };

  return (
    <Nav vertical tabs>
      <NavItem className="mx-auto mt-3">
        <NavLink
          tag={Link}
          to="/products"
          className={`text-white h6 ${activeProductId === null && "active"}`}
          onClick={() => handleClick(null)}
        >
          All Products
        </NavLink>
        {products.map((product) => (
          <NavLink
            key={product.productId}
            tag={Link}
            to={`/products/${product.productId}`}
            className={`text-white h6 ${
              activeProductId === product.productId && "active"
            }`}
            onClick={() => handleClick(product)}
          >
            {product.productName}
          </NavLink>
        ))}
      </NavItem>
    </Nav>
  );
}

export default ProductNav;
