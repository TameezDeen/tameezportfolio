import React from "react";
import "./about.css";
import AboutImg from "../../assets/propic.JPG";
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
            As an Associate Project Manager with a strong foundation in the software domain, I specialize in coordinating and executing 
            complex, cross-functional projects that align with strategic objectives and consistently exceed client expectations. 
            My experience spans the full project lifecycle, from planning and development through deployment and high-level 
            validation, ensuring seamless collaboration between internal teams and external stakeholders.
            <br/>
            <br/>
            I bring hands-on expertise in project management tools such as Jira, Microsoft Project, and Excel-based trackers, 
            enabling clear oversight of timelines, risks, and deliverables. My approach blends structured planning with adaptability, 
            allowing me to manage change effectively while maintaining high delivery standards and client satisfaction.
            <br/>
            <br/>
            I excel in collaborative environments and take pride in bridging communication between technical teams and business stakeholders. 
            With a proactive mindset and strong attention to detail, I anticipate risks, facilitate timely decisions, and contribute to efficient 
            project execution.
            <br/>
            <br/>
            Driven by continuous improvement and a commitment to excellence, I deliver outcome-focused solutions that reduce rework, 
            build trust, and support long-term success for both clients and the organization.
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
