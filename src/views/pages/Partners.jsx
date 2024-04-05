import { useEffect } from "react";

import PartnerHeader from "components/Headers/PartnerHeader";
import Partner from "views/partner-sections/Partner";

function Partners() {
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
        <PartnerHeader />
        <Partner />
      </div>
    </>
  );
}

export default Partners;
