import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

import { products } from "constants/products";
import { services } from "constants/services";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled =
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399;
      setNavbarColor(isScrolled ? "" : "navbar-transparent");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {collapseOpen && (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      )}
      <Navbar className={`fixed-top ${navbarColor}`} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="/"
              id="navbar-brand"
              style={{ fontSize: "20px", fontWeight: "bold" }}
            >
              <img
                alt="logo"
                src={require("assets/img/ats-logo-only.png")}
                style={{ height: 25, width: 25 }}
                className="mx-3"
              />
              Alam Tehnik Semesta
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#"
                  onClick={() => handleNavLinkClick("header-section")}
                >
                  <p style={{ fontSize: "14px", fontWeight: "bold" }}>Home</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  onClick={() => handleNavLinkClick("about-us-section")}
                >
                  <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                    About Us
                  </p>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#"
                  nav
                  onClick={(e) => e.preventDefault()}
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  <p>Services</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    to="#"
                    tag={Link}
                    onClick={handleNavLinkClick}
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    All services
                  </DropdownItem>
                  {services.map((service) => (
                    <DropdownItem
                      key={service.serviceId}
                      onClick={(e) => e.preventDefault()}
                      style={{ fontSize: "14px", fontWeight: "bold" }}
                    >
                      {service.serviceName}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#"
                  nav
                  onClick={(e) => e.preventDefault()}
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  <p>Products</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    to="#"
                    tag={Link}
                    onClick={() => handleNavLinkClick("products-section")}
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    All products
                  </DropdownItem>
                  {products.map((product) => (
                    <DropdownItem
                      key={product.productId}
                      onClick={(e) => e.preventDefault()}
                      style={{ fontSize: "14px", fontWeight: "bold" }}
                    >
                      {product.productName}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="#" onClick={handleNavLinkClick}>
                  <p style={{ fontSize: "14px", fontWeight: "bold" }}>News</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={handleNavLinkClick}>
                  <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                    Partners
                  </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <Button
                  className="nav-link btn-neutral p-2 px-3"
                  color="info"
                  href="/"
                >
                  <i
                    className="now-ui-icons ui-1_send mr-2 "
                    style={{ fontSize: "12px" }}
                  ></i>
                  <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                    Contact Us
                  </p>
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
