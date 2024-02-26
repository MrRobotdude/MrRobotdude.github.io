import React from "react";

// reactstrap components
import { Container } from "reactstrap";

const handleFooterLinkClick = (sectionId, e) => {
  e.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li></li>
            <li>
              <a
                href="#about-us"
                onClick={(e) => handleFooterLinkClick("about-us-section", e)}
              >
                About Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          Copyright © {new Date().getFullYear()}{" "}
          <a href="/">Alam Tehnik Semesta</a>. All Right Reserved.
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
