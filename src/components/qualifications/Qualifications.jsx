import React, { useState } from "react";
import "./qualifications.css";

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification__section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          {/*=============== Education ===============*/}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/*=============== 1.1 ===============*/}
            <div className="qualification__data">
              <div>
                <h3 className="qualification_location">
                  Royal Institute International School
                </h3>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> 2007 - 2017</i>
                </div>
                <h3 className="qualification__title">
                  GCE Ordinary Level - 2016
                </h3>
                <span className="qualification__subtitle">
                  6A Passes <br /> 3B Passes
                </span>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/*=============== 1.2 ===============*/}
            <div className="qualification__data">
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
                  GCE Advance Level - 2019 (Physical Science Stream)
                </h3>
                <span className="qualification__subtitle">
                  2A Passes <br /> 2S Passes
                </span>
              </div>
            </div>

            {/*=============== 1.3 ===============*/}
            <div className="qualification__data">
              <div>
                <h3 className="qualification_location">
                  General Sir John Kotelawala Defence University
                </h3>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> 2020 - present</i>
                </div>
                <h3 className="qualification__title">
                  Bsc in Computer Science
                </h3>
            
              </div>

              <div>
                <span className="qualification__rounder"></span>
                {/* <span className="qualification__line"></span> */}
              </div>
            </div>

            {/*=============== 1.4 ===============*/}
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

    
          {/*=============== Experience ===============*/}
          
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/*=============== 2.1 ===============
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">1 EXp</h3>
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

            {/*=============== 2.2 ===============
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Exp2 </h3>
                <span className="qualification__subtitle">6As 3Bs</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2016</i>
                </div>
              </div>
            </div>*/}

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

export default Qualifications;
