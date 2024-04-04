import { useEffect } from "react";

import AboutUsHeader from "components/Headers/AboutUsHeader";
import About from "views/about-sections/About";

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
        <AboutUsHeader />
        <About />
      </div>
    </>
  );
}

export default AboutUs;
