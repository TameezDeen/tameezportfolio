import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bxs-briefcase about__icon"></i>
        <h3 className="about__title">Work Experience</h3>
        <span className="about__subtitle">2+ Years</span>
      </div>

      <div className="about__box">
        <i class="bx bxs-graduation about__icon"></i>
        <h3 className="about__title">Degree</h3>
        <span className="about__subtitle">BSc Computer Science</span>
      </div>
      
      <div className="about__box">
        <i class="bx bxs-school about__icon"></i>
        <h3 className="about__title">University</h3>
        <span className="about__subtitle">
          General Sir John Kotelawala Defence University
        </span>
      </div>
    </div>
  );
};

export default Info;
