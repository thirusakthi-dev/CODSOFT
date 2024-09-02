import React from "react";
import { ExperienceData } from "../utils/ExperinceData";
import ExperienceItem from "./ExperienceItem";
import "../style/blocks/experience.scss";
import "../style/responsive.scss";

const Experience = () => {
  return (
    <section className="experience-section" id="experience-section">
      <div className="experience-head">
        <p className="content-text">Abilities</p>
        <h2 className="sec-head">Experience</h2>
      </div>
      {/* <div className="experience-container"> */}
      <ul className="experience-container">
        {ExperienceData.map((item) => (
          <ExperienceItem
            key={item.id}
            logo={item.logo}
            name={item.name}
            role={item.role}
            description={item.description}
          />
        ))}
      </ul>
      {/* </div> */}
    </section>
  );
};

export default Experience;
