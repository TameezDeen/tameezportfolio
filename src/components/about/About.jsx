import React from "react";
import "./about.css";
import AboutImg from "../../assets/pics.jpg";
import CV from "../../assets/Tameez-CV.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            The path to project management has always been a passion 
            of mine as an undergraduate in Computer Science. I possess 
            strong communication skills and  I have a proven track 
            record of leading teams to achieve project objectives. With 
            a solid understanding of software development processes, I 
            am well-versed in various programming languages, databases, 
            and software tools. I am highly organized and skilled to 
            thrive in fast-paced and dynamic work environments. I 
            embrace new technologies and methodologies, continuously 
            learning and staying updated to drive innovation and 
            improve project outcomes.
          </p>

          <a download='' href={CV} className="button button--flex">
            Download CV
                      </a>
        </div>
      </div>
    </section>
  );
};

export default About;
