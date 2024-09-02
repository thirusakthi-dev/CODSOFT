import React from "react";
import DevPic from "../assets/images/sh.jpg";
import "../style/blocks/about.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [0, -300]);

  return (
    <section className="about-section" id="about-section">
      <div className="about-head">
        <p className="content-text">My Intro</p>
        <h2 className="sec-head">About Me</h2>
      </div>
      <div className="about-container">
        <figure>
          <img src={DevPic} className="about-img"></img>
        </figure>
        <ul className="about-list">
          <li>
            I'm a dedicated Frontend Developer with a passion for crafting web
            applications that are pivotal to the overall success of the product.
          </li>
          <li>
            I thoroughly enjoy the process of building web applications that
            seamlessly blend functionality and aesthetics, empowering users with
            intuitive and efficient digital experiences.
          </li>
          <li>
            I emphasize my expertise in responsive design by showcasing projects
            optimized for various screen sizes and devices. Demonstrating my
            ability to create seamless user experiences across desktop, tablet,
            and mobile platforms underscores my commitment to accessibility and
            user-centric design principles.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
