import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import LoadingScreen from "react-loading-screen";

import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

import IndexNavbar from "components/Navbars/IndexNavbar";
import DarkFooter from "components/Footers/DarkFooter";

// Lazy load the components
const Home = lazy(() => import("views/pages/Home"));
const Service = lazy(() => import("views/pages/Service"));
const Product = lazy(() => import("views/pages/Product"));
const AboutUs = lazy(() => import("views/pages/AboutUs"));
const ContactUs = lazy(() => import("views/pages/ContactUs"));
const Projects = lazy(() => import("views/pages/Projects"));
const NotFound = lazy(() => import("views/pages/NotFound"));

const routes = [
  { path: "/", component: Home },
  { path: "/products/", component: Product },
  { path: "/products/:activeId", component: Product },
  { path: "/services/", component: Service },
  { path: "/services/:activeId", component: Service },
  { path: "/about-us", component: AboutUs },
  { path: "/contact-us", component: ContactUs },
  { path: "/projects", component: Projects },
  { path: "/not-found", component: NotFound },
];

const Content = () => {
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
                  <Suspense
                    fallback={
                      <LoadingScreen
                        loading={true}
                        bgColor="rgba(255,255,255,0.8)"
                        spinnerColor="#9ee5f8"
                        textColor="#676767"
                        logoSrc=""
                        text=""
                      >
                        {" "}
                      </LoadingScreen>
                    }
                  >
                    {React.createElement(route.component)}
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
