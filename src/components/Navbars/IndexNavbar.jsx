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

  const handleNavLinkClick = (sectionId) => {
    if (
      sectionId.startsWith("/products/") ||
      sectionId.startsWith("/services/")
    ) {
      window.location.href = sectionId;
    }
    if (window.location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      switch (sectionId) {
        case "header-section":
          window.location.href = "/";
          break;
        case "about-us-section":
          window.location.href = "/about-us";
          break;
        case "products-section":
          window.location.href = "/products";
          break;
        case "services-section":
          window.location.href = "/services";
          break;
        case "news-section":
          window.location.href = "/news";
          break;
        case "partners-section":
          window.location.href = "/partners";
          break;
        case "contact-us-section":
          window.location.href = "/contact-us";
          break;
        default:
          break;
      }
    }
  };
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
                    onClick={() => handleNavLinkClick("services-section")}
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    All services
                  </DropdownItem>
                  {services.map((service) => (
                    <DropdownItem
                      key={service.serviceId}
                      onClick={() =>
                        handleNavLinkClick(`/services/${service.serviceId}`)
                      }
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
                      to={`/products/${product.productId}`}
                      key={product.productId}
                      onClick={() =>
                        handleNavLinkClick(`/products/${product.productId}`)
                      }
                      style={{ fontSize: "14px", fontWeight: "bold" }}
                    >
                      {product.productName}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  href="#"
                  onClick={() => handleNavLinkClick("news-section")}
                >
                  <p style={{ fontSize: "14px", fontWeight: "bold" }}>News</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  onClick={() => handleNavLinkClick("partners-section")}
                >
                  <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                    Partners
                  </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <Button
                  className="nav-link btn-neutral p-2 px-3"
                  color="info"
                  onClick={() => handleNavLinkClick("contact-us-section")}
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
      {showScrollTopButton && (
        <Button
          Button
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
    </>
  );
}

export default IndexNavbar;
