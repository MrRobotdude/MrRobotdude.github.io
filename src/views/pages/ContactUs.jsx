import { useEffect } from "react";

import ContactUsHeader from "components/Headers/ContactUsHeader";
import Contact from "views/contact-sections/Contact";

function AboutUs() {
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
  return (
    <>
      <div className="wrapper">
        <ContactUsHeader />
        <Contact />
      </div>
    </>
  );
}

export default AboutUs;
