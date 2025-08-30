import React, { useState } from "react";
import "./journey.css";

const Journeys = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="journey__section" id="journeys"> 
      <h2 className="section__title">My Personal Journey</h2>
      <span className="section__subtitle">Experience and Education</span>

      <div className="journey__container container">
        <div className="journey__tabs">
          <div
            className={
              toggleState === 1
                ? "journey__button journey__active button--flex"
                : "journey__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-briefcase-alt journey__icon"></i>
            Experience
          </div>

          <div
            className={
              toggleState === 2
                ? "journey__button journey__active button--flex"
                : "journey__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-graduation-cap journey__icon"></i>
            Education
          </div>
        </div>

        <div className="journey__sections">
          {/*=============== Experience ===============*/}
          <div
            className={
              toggleState === 1
                ? "journey__content journey__content-active"
                : "journey__content"
            }
          >
            {/*=============== 1.1 ===============*/}
            <div className="journey__data">
              <div>
                <h3 className="journey_location">Omobio (Pvt) Ltd.</h3>
                <span className="journey__title">
                  Trainee Project Manager
                </span>
                <div className="journey__calender">
                  <i className="uil uil-calendar-alt"> 2023 June - 2023 December</i>
                </div>
              </div>

              <div>
                <span className="journey__rounder"></span>
                <span className="journey__line"></span>
              </div>
            </div>

            {/* =============== 1.2 =============== */}
            <div className="journey__data">
              <div></div>

              <div>
                <span className="journey__rounder"></span>
                <span className="journey_line"></span>
              </div>
              <div>
                <h3 className="journey_location">Omobio (Pvt) Ltd.</h3>
                <span className="journey_title">
                  Associate Project Manager
                </span>
                <div className="journey__calender">
                  <i className="uil uil-calendar-alt"> 2024 January - Present</i>
                </div>
              </div>
            </div>

            {/*=============== 1.3 ===============*/}
            {/* <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
              <h3 className="qualification_location">
                  Zahira College Colombo
                </h3>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> 2017 - 2019</i>
                </div>
                <h3 className="qualification__title">
                  GCE Advance Level (2019) (Physical Science Stream)
                </h3>
                <span className="qualification__subtitle">
                  2A Passes <br /> 2S Passes
                </span>
              </div>
            </div> */}
          </div>

          {/*=============== Education ===============*/}

          <div
            className={
              toggleState === 2
                ? "journey__content journey__content-active"
                : "journey__content"
            }
          >
            {/* =============== 2.1 =============== */}
            <div className="journey__data">
              <div>
                <h3 className="journey_location">
                  Royal Institute International School
                </h3>
                <div className="journey__calender">
                  <i className="uil uil-calendar-alt"> 2007 - 2017</i>
                </div>
                <h3 className="journey__title">
                  GCE Ordinary Level - 2016
                </h3>
                <span className="journey__subtitle">
                  6A Passes <br /> 3B Passes
                </span>
              </div>

              <div>
                <span className="journey__rounder"></span>
                <span className="journey__line"></span>
              </div>
            </div>

            {/*=============== 2.2 ===============*/}
            <div className="journey__data">
              <div></div>
              
              <div>
                <span className="journey__rounder"></span>
                <span className="journey__line"></span>
              </div>

              <div>
                <h3 className="journey_location">
                  Zahira College Colombo
                </h3>
                <div className="journey__calender">
                  <i className="uil uil-calendar-alt"> 2017 - 2019</i>
                </div>
                <h3 className="journey__title">
                  GCE Advance Level - 2019 (Physical Science Stream)
                </h3>
                <span className="journey__subtitle">
                  2A Passes <br /> 2S Passes
                </span>
              </div>
            </div>

            {/*=============== 2.3 ===============*/}
            <div className="journey__data">
              <div>
                <h3 className="journey_location">
                  General Sir John Kotelawala Defence University
                </h3>
                <div className="journey__calender">
                  <i className="uil uil-calendar-alt"> 2020 - 2023</i>
                </div>
                <h3 className="journey__title">
                  BSc (Hons)  in Computer Science
                </h3>
                <span className="journey__subtitle">
                  GPA - 3.2383
                </span>
              </div>

              <div>
                <span className="journey__rounder"></span>
                {/*<span className="journey__line"></span>*/}
              </div>
            </div>
            
            {/*=============== 2.3 ===============
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Exp3 </h3>
                <span className="qualification__subtitle">6As 3Bs</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2016</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>*/}
            {/*=============== 2.4 ===============
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Exp4</h3>
                <span className="qualification__subtitle">6As 3Bs</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2016</i>
                </div>
              </div>
            </div>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journeys;
