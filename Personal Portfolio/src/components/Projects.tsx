import React from "react";
import "../style/abstract/styles.scss";
import "../style/blocks/project.scss";

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="project-head">
        <p className="content-text">Works</p>
        <h2 className="sec-head">Projects</h2>
      </div>
      <div className="project-container">
        <div className="project-card">
          <section>
            <img></img>
          </section>
          <section>
            <p className="project-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              delectus repudiandae facilis iusto et excepturi sequi, quae
              voluptatibus magni? Tenetur fugit corrupti quidem maxime, iusto
              hic! Non consequatur earum eos.
            </p>
          </section>
          <section className="project-link">
            <a href="#">Code</a>
            <a href="#">Preview</a>
          </section>
        </div>
        <div className="project-card">
          <section>
            <img></img>
          </section>
          <section>
            <p>Portrfolio</p>
            <p className="project-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              delectus repudiandae facilis iusto et excepturi sequi, quae
              voluptatibus magni? Tenetur fugit corrupti quidem maxime, iusto
              hic! Non consequatur earum eos.
            </p>
          </section>
          <section className="project-link">
            <a href="#">Code</a>
            <a href="#">Preview</a>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Projects;
