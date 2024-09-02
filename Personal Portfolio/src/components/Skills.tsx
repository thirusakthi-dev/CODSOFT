import React from "react";
import { SkillsData, ToolsData } from "../utils/SkillsIcon";
import SkillItem from "./SkillItem";
import "../style/blocks/skills.scss";
import "../style/responsive.scss";

const Skills = () => {
  return (
    <section className="skills-section" id="skills-section">
      <div className="skills-head">
        <p className="content-text">Abilities</p>
        <h2 className="sec-head">Skills</h2>
      </div>
      <div className="skills-container">
        <section className="skills-card">
          <p className="skills-card-name">Scripting Language</p>
          <ul className="skills-list">
            {SkillsData.map((skill) => (
              <SkillItem
                key={skill.id}
                skill={skill.name}
                icon={skill.icon}
                level={skill.level}
              />
            ))}
          </ul>
        </section>
        <section className="skills-card">
          <p className="skills-card-name">Tools</p>
          <ul className="skills-list">
            {ToolsData.map((skill) => (
              <SkillItem
                key={skill.id}
                skill={skill.name}
                icon={skill.icon}
                level={skill.level}
              />
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Skills;
