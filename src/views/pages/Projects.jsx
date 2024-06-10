import { useEffect } from "react";

import ProjectHeader from "components/Headers/ProjectHeader";
import Project from "views/project-sections/Project";

function Projects() {
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
        <ProjectHeader />
        <Project />
      </div>
    </>
  );
}

export default Projects;
