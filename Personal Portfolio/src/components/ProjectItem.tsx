import React from "react";
import Project from "../assets/images/bg.jpg";

const ProjectItem = () => {
  return (
    <li className="project-item">
      <img src={Project} style={{ width: 200, height: 100 }}></img>
      <p className="project-name">Project 01</p>
      <p className="project-desc"></p>
      <ul></ul>
    </li>
  );
};

export default ProjectItem;
