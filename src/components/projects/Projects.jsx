import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <div className="parent__projects" id="projects">
      <div>
        <h1 className="projects__title">Projects</h1>
        <h3 className="projects__subtitle">Some of my recent work</h3>
      </div>
      <div className="container">
        <div className="project__items mt-lg-4">Website one</div>
      </div>
    </div>
  );
};

export default Projects;
