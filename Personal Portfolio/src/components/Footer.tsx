import React from "react";
import { SocialIcons } from "../utils/Icons";
SocialIcons;
import "../style/responsive.scss";
import "../style/blocks/footer.scss";
import GithubIcon from "../assets/icons/social/github-light.svg";
import LikedInIcon from "../assets/icons/social/linkedin-light.svg";
import PhoneIcon from "../assets/icons/social/phone-light.svg";
import MailIcon from "../assets/icons/social/mail-light-1.svg";

const Footer = () => {
  const LightIcons = SocialIcons.filter((item) => item.mode === "light").map(
    (item) => item.icon
  );
  const DarkIcons = SocialIcons.filter((item) => item.mode === "dark").map(
    (item) => item.icon
  );

  return (
    <section className="footer-section" id="footer-section">
      <div className="footer-container">
        {/* <h2 className="sec-head">Get Into Touch</h2> */}
        <ul className="footer-nav">
          <li>
            <a href="#home-section">Home</a>
          </li>
          <li>
            <a href="#about-section">About</a>
          </li>
          <li>
            <a href="#skills-section">Skills</a>
          </li>
          <li>
            <a href="#experience-section">Work</a>
          </li>
          <li>
            <a href="#contact-section">Contact</a>
          </li>
        </ul>
        <ul className="footer-social">
          <li>
            <a href="mailto:thirusakthi.dev@gmail.com" target="_blank">
              <img src={MailIcon} style={{ width: 21, height: 21 }}></img>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/thirusakthi-dev"
              target="_blank"
            >
              <img src={LikedInIcon} style={{ width: 21, height: 21 }}></img>
            </a>
          </li>
          <li>
            <a href="https://github.com/thirusakthi-dev" target="_blank">
              <img src={GithubIcon} style={{ width: 21, height: 21 }}></img>
            </a>
          </li>
          <li>
            <a href="tel:+916369594529">
              <img src={PhoneIcon} style={{ width: 21, height: 21 }}></img>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
