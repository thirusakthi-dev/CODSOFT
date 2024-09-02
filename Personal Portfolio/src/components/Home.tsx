import React from "react";
import "../style/blocks/home.scss";
import { SocialIcons } from "../utils/Icons";
import ProfileIcon from "../assets/images/profile-one.png";
import Typewriter from "typewriter-effect";
import Resume from "../assets/files/Thiruvengadam Resume Updated.pdf";

const Home = () => {
  const [mailDark, mailLight, linkedInDark, linkedInLight, gitIcon] =
    SocialIcons;

  return (
    <section className="home-section" id="home-section">
      <div className="home-container">
        <figure className="dev-profile">
          <img src={ProfileIcon}></img>
        </figure>
        <section className="dev-detail">
          <p className="dev-name">Hello, I'm Thiru</p>
          <div className="dev-role">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Frontend Developer")
                  .pauseFor(10)
                  .start();
              }}
            />
          </div>
        </section>
        <section className="home-actions">
          <a href={Resume} className="download-btn" target="_blank">
            Download CV
          </a>
          <a href="#contact" className="contact-btn">
            Contact
          </a>
        </section>
        <p className="home-desc">
          Versatile developer proficient in React, JavaScript, SASS, and
          TypeScript. Let's connect for further discussion.
        </p>
      </div>
    </section>
  );
};

export default Home;
