import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

import Home from "views/pages/Home";
import Service from "views/pages/Service";
import Product from "views/pages/Product";
import AboutUs from "views/pages/AboutUs";
import ContactUs from "views/pages/ContactUs";
import Partners from "views/pages/Partners";
import NotFound from "views/pages/NotFound";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DarkFooter from "components/Footers/DarkFooter";

const routes = [
  { path: "/", component: Home },
  { path: "/products/", component: Product },
  { path: "/products/:activeId", component: Product },
  { path: "/services/", component: Service },
  { path: "/services/:activeId", component: Service },
  { path: "/about-us", component: AboutUs },
  { path: "/contact-us", component: ContactUs },
  { path: "/partners", component: Partners },
  { path: "/not-found", component: NotFound },
];

const Content = () => {
  const [loadedPages, setLoadedPages] = useState({});

  const handleLoad = (pageName) => {
    setLoadedPages((prevPages) => ({
      ...prevPages,
      [pageName]: true,
    }));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        maxWidth: "100vw",
      }}
    >
      <HashRouter>
        <IndexNavbar />
        <div style={{ flex: 1 }}>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    {loadedPages[route.component.name]
                      ? React.createElement(route.component, null, null)
                      : React.createElement(
                          route.component,
                          { onLoad: () => handleLoad(route.component.name) },
                          null
                        )}
                  </Suspense>
                }
              />
            ))}
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </div>
        <DarkFooter />
      </HashRouter>
    </div>
  );
};

const App = () => (
  <>
    <Content />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
