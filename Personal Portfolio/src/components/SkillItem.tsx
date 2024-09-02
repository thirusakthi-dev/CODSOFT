import React from "react";

interface SkillProps {
  skill: string;
  icon: string;
  level: string;
}

const SkillItem: React.FC<SkillProps> = ({ skill, icon, level }) => {
  return (
    <li className="skill-item">
      <img src={icon} style={{ width: 36, height: 36 }}></img>
      <div className="skill-desc">
        <p className="skill-name">{skill}</p>
        <p className="skill-level">{level}</p>
      </div>
    </li>
  );
};

export default SkillItem;
