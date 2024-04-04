import { useEffect } from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import HomeHeader from "components/Headers/HomeHeader";
import AboutUs from "views/home-sections/AboutUs";
import Products from "views/home-sections/Products";
import Services from "views/home-sections/Services";

function Home() {
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
      {/* <IndexNavbar /> */}
      <div className="wrapper">
        <HomeHeader />
        <div className="main">
          <AboutUs />
          <Services />
          <Products />
        </div>
      </div>
    </>
  );
}

export default Home;
