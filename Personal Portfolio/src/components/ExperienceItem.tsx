import React from "react";
interface ExperienceProps {
  logo: string;
  role: string;
  name: string;
  description: string[];
}
const ExperienceItem: React.FC<ExperienceProps> = ({
  logo,
  role,
  name,
  description,
}) => {
  return (
    <li className="experience-card">
      <img src={logo} style={{ width: 39, height: 39 }} loading="lazy"></img>
      <section className="exp-content">
        <div className="exp-detail">
          <p className="exp-firm">{name}</p>
          <p className="exp-role">{role}</p>
        </div>
        <ul className="exp-list">
          {description.map((desc) => (
            <li key={desc.length + 1}>{desc}</li>
          ))}
        </ul>
      </section>
    </li>
  );
};

export default ExperienceItem;
