import React, { useState, useEffect } from "react";
import "./certifications.css";

const Certifications = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setToggleState(0);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="certifications section" id="certifications">
      <h2 className="section__title">Certifications</h2>
      <span className="section__subtitle">My certifications</span>
      <div className="certifications__container container grid">
        {/*=============== 1 ===============*/}
        <div className="certifications__content">
          <div>
            <i className="uil uil-web-grid certifications__icon"></i>
            <h3 className="certifications__title">
              HTML, CSS, and Javascript for Web Developers
            </h3>
            <span className="certifications__provider">
              By Johns Hopkins University
            </span>
          </div>

          <span className="certifications__button" onClick={() => toggleTab(1)}>
            View More
            <i
              className="uil uil-arrow-right 
             certifications__button-icon"
            ></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "certifications__modal active-modal"
                : "certifications__modal"
            }
          >
            <div className="certifications__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times 
              certifications__modal-close"
              ></i>

              <h3 className="certifications__modal-title">
                HTML, CSS, and Javascript for Web Developers
              </h3>
              <p className="certifications__modal-description">
                This certification course equipped me with a comprehensive
                foundation in web development, covering HTML, CSS, and
                JavaScript. I learnt the fundamental tools and techniques to
                create dynamic and responsive web pages. Starting with HTML and
                CSS, I gained the knowledge to construct modern and visually
                appealing web pages. Through JavaScript, I learned how to build
                interactive and dynamic web applications, enhancing the
                functionality of my pages. Overall, I am now capable of creating
                professional, feature-rich web pages that deliver a seamless
                user experience.
                <br />
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/4ZKUADBXF9J2"
                  className="certifications__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click to view certificate{" "}
                </a>
              </p>

              <ul className="certifications__modal-skills grid">
                <li className="certifications__modal-skill">
                  <i
                    className="uil uil-check-circle 
                  certifications__modal-icon"
                  ></i>
                  <p className="certifications__modal-info">HTML</p>
                </li>

                <li className="certifications__modal-skill">
                  <i
                    className="uil uil-check-circle 
                  certifications__modal-icon"
                  ></i>
                  <p className="certifications__modal-info">CSS</p>
                </li>

                <li className="certifications__modal-skill">
                  <i
                    className="uil uil-check-circle 
                  certifications__modal-icon"
                  ></i>
                  <p className="certifications__modal-info">JavaScript</p>
                </li>

                <li className="certifications__modal-skill">
                  <i
                    className="uil uil-check-circle 
                  certifications__modal-icon"
                  ></i>
                  <p className="certifications__modal-info">CSS Frameworks</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*=============== 2 ===============*/}
        <div className="certifications__content">
          <div>
            <i className="uil uil-folder-check certifications__icon"></i>
            <h3 className="certifications__title">
              Google Project <br />
              Management:
              <br />
              Professional Certificate
            </h3>
            <span className="certifications__provider">By Google</span>
          </div>

          <span className="certifications__button" onClick={() => toggleTab(2)}>
            View More
            <i
              className="uil uil-arrow-right 
             certifications__button-icon"
            ></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "certifications__modal active-modal"
                : "certifications__modal"
            }
          >
            <div className="certifications__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times 
              certifications__modal-close"
              ></i>

              <h3 className="certifications__modal-title">
                Google Project Management: Professional Certificate
              </h3>
              <p className="certifications__modal-description">
                I gained valuable insights in project management, focusing on
                the skills needed to excel as a project manager. Through
                real-world scenarios, I improved problem-solving abilities,
                emphasizing communication, stakeholder management, and strategic
                thinking. I learned to create/manage project documentation,
                ensuring clear communication with team members and stakeholders.
                The course covered Agile principles, including Scrum events,
                artifacts, and roles. Overall, it enhanced my ability to excel
                in project management.
                <br />
                <a
                  href="https://drive.google.com/file/d/1lsx9lexB0eEttor0l7Cy0gQnnAH4L42i/view?usp=sharing"
                  className="certifications__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click to view certificate
                </a>
              </p>

              <ul className="certifications__modal-skills grid">
                <li className="certifications__modal-skill">
                  <i
                    className="uil uil-check-circle 
                  certifications__modal-icon"
                  ></i>
                  <p className="certifications__modal-info">Project Planning</p>
                </li>

                <li className="certifications__modal-skill">
                  <i
                    className="uil uil-check-circle 
                  certifications__modal-icon"
                  ></i>
                  <p className="certifications__modal-info">Risk Management</p>
                </li>

                <li className="certifications__modal-skill">
                  <i
                    className="uil uil-check-circle 
                  certifications__modal-icon"
                  ></i>
                  <p className="certifications__modal-info">Agile and Scrum</p>
                </li>

                <li className="certifications__modal-skill">
                  <i
                    className="uil uil-check-circle 
                  certifications__modal-icon"
                  ></i>
                  <p className="certifications__modal-info">
                    Project Management
                  </p>
                </li>

                <li className="certifications__modal-skill">
                  <i
                    className="uil uil-check-circle 
                  certifications__modal-icon"
                  ></i>
                  <p className="certifications__modal-info">Documentation</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*=============== 3 ===============*/}
        <div className="certifications__content">
          <div>
            <i className="uil uil-folder-check certifications__icon"></i>
            <h3 className="certifications__title">
              Agile <br />
              with <br />
              Atlassian Jira
            </h3>
            <span className="certifications__provider">By Atlassian</span>
          </div>

          <span className="certifications__button" onClick={() => toggleTab(3)}>
            View More
            <i
              className="uil uil-arrow-right 
             certifications__button-icon"
            ></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "certifications__modal active-modal"
                : "certifications__modal"
            }
          >
            <div className="certifications__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times 
              certifications__modal-close"
              ></i>

              <h3 className="certifications__modal-title">
                Agile with Atlassian Jira
              </h3>
              <p className="certifications__modal-description">
                This course provided a solid understanding of agile
                methodologies, covering principles like kanban and scrum. It
                emphasized using Jira Software Cloud for practical exercises,
                exploring both company-managed and team-managed Jira projects. I
                gained comprehensive knowledge of agile principles, practices,
                and configuring Jira projects. With practical experience, I am
                well-prepared to apply these skills in real-world scenarios.{" "}
                <br />
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/3ZXJL9SXF469"
                  className="certifications__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click to view certificate
                </a>
              </p>

              <ul className="certifications__modal-skills grid">
                <li className="certifications__modal-skill">
                  <i
                    className="uil uil-check-circle 
                  certifications__modal-icon"
                  ></i>
                  <p className="certifications__modal-info">
                    Project Management
                  </p>
                </li>

                <li className="certifications__modal-skill">
                  <i
                    className="uil uil-check-circle 
                  certifications__modal-icon"
                  ></i>
                  <p className="certifications__modal-info">Agile Management</p>
                </li>

                <li className="certifications__modal-skill">
                  <i
                    className="uil uil-check-circle 
                  certifications__modal-icon"
                  ></i>
                  <p className="certifications__modal-info">Scrum</p>
                </li>

                <li className="certifications__modal-skill">
                  <i
                    className="uil uil-check-circle 
                  certifications__modal-icon"
                  ></i>
                  <p className="certifications__modal-info">Jira</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*=============== 4 ===============*/}
        <div className="certifications__content">
          <div>
            <i className="uil uil-analysis certifications__icon"></i>
            <h3 className="certifications__title">
              Fundamentals of <br />
              Digital <br />
              Marketing
            </h3>
            <span className="certifications__provider">By Google</span>
          </div>

          <span className="certifications__button" onClick={() => toggleTab(4)}>
            View More
            <i
              className="uil uil-arrow-right 
             certifications__button-icon"
            ></i>
          </span>

          <div
            className={
              toggleState === 4
                ? "certifications__modal active-modal"
                : "certifications__modal"
            }
          >
            <div className="certifications__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times 
              certifications__modal-close"
              ></i>

              <h3 className="certifications__modal-title">
                Fundamentals of digital marketing
              </h3>
              <p className="certifications__modal-description">
                Taking this course gave me a comprehensive understanding of
                digital marketing, covering essential concepts and techniques
                for successful strategies. Topics included SEO, SEM, content
                marketing, social media marketing, email marketing, and mobile
                marketing. The course also focused on metrics and analytics
                tools to measure campaign success. I gained skills in tracking
                and analyzing key performance indicators to make data-driven
                decisions for continuous improvement. <br />
                <a
                  href="https://learndigital.withgoogle.com/digitalgarage/validate-certificate-code"
                  className="certifications__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click to view certificate <br />
                </a>
                <span className="certification_id">
                  (Certificate ID:GLW BUX LNL)
                </span>
              </p>

              <ul className="certifications__modal-skills grid">
                <li className="certifications__modal-skill">
                  <i
                    className="uil uil-check-circle 
                  certifications__modal-icon"
                  ></i>
                  <p className="certifications__modal-info">
                    Search Engine Optimization
                  </p>
                </li>

                <li className="certifications__modal-skill">
                  <i
                    className="uil uil-check-circle 
                  certifications__modal-icon"
                  ></i>
                  <p className="certifications__modal-info">
                    Market Research and Insights
                  </p>
                </li>

                <li className="certifications__modal-skill">
                  <i
                    className="uil uil-check-circle 
                  certifications__modal-icon"
                  ></i>
                  <p className="certifications__modal-info">
                    Data Driven Decsion Making
                  </p>
                </li>

                <li className="certifications__modal-skill">
                  <i
                    className="uil uil-check-circle 
                  certifications__modal-icon"
                  ></i>
                  <p className="certifications__modal-info">
                    Content Creation and Optimization
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*END certifications__container container grid */}
    </section>
  );
};

export default Certifications;
