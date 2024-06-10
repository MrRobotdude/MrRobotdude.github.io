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
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled =
        document.documentElement.scrollTop > 249 ||
        document.body.scrollTop > 249;
      setNavbarColor(isScrolled ? "" : "navbar-transparent");
      setShowScrollTopButton(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const section = document.getElementById("header-section");
    section.scrollIntoView({ behavior: "smooth" });
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
              to="/"
              tag={Link}
              id="navbar-brand"
              className="navbar-brand-custom"
            >
              <img
                alt="logo"
                src={require("assets/img/ats-logo-only.png")}
                className="mx-3 navbar-logo"
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
                <NavLink tag={Link} to="/">
                  <p className="nav-item-text">Home</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/about-us">
                  <p className="nav-item-text">About</p>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  nav
                  className="nav-item-text"
                >
                  <p>Products</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    tag={Link}
                    to="/products"
                    className="nav-item-text"
                  >
                    All products
                  </DropdownItem>
                  {products.map((product) => (
                    <DropdownItem
                      key={product.productId}
                      tag={Link}
                      to={`/products/${product.productId}`}
                      className="nav-item-text dropdown-item-custom"
                    >
                      {product.productName}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  nav
                  className="nav-item-text"
                >
                  <p>Services</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    tag={Link}
                    to="/services"
                    className="nav-item-text"
                  >
                    All services
                  </DropdownItem>
                  {services.map((service) => (
                    <DropdownItem
                      key={service.serviceId}
                      tag={Link}
                      to={`/services/${service.serviceId}`}
                      className="nav-item-text dropdown-item-custom"
                    >
                      {service.serviceName}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>
              {/* <NavItem>
                <NavLink tag={Link} to="/news">
                  <p className="nav-item-text">News</p>
                </NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink tag={Link} to="/projects">
                  <p className="nav-item-text">Projects</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <Button
                  className="nav-link btn-neutral p-2 px-3"
                  color="info"
                  tag={Link}
                  to="/contact-us"
                >
                  <i
                    className="now-ui-icons ui-1_send mr-2 "
                    style={{ fontSize: "12px" }}
                  ></i>
                  <p className="nav-item-text">Contact Us</p>
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      {showScrollTopButton && (
        <Button
          className="btn-icon btn-round"
          color="info"
          type="button"
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 9999,
            color: "white",
          }}
        >
          <i className="now-ui-icons arrows-1_minimal-up" />
        </Button>
      )}
      <Button
        className="btn-icon whatsapp-button"
        color="success"
        type="button"
        onClick={() => window.open("https://wa.me/628159088829")}
        style={{
          position: "fixed",
          bottom: "50%",
          right: "0px",
          zIndex: 9999,
          color: "white",
          fontSize: "30px",
          padding: "20px",
          paddingRight: "40px",
        }}
      >
        <i className="fab fa-whatsapp mr-2" />
      </Button>
    </>
  );
}

export default IndexNavbar;
