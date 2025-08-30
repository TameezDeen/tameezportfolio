import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.pageYOffset;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop - 50 &&
          scrollPosition < sectionTop + sectionHeight - 50
        ) {
          setActiveNav(`#${section.id}`);
        }
      });
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Tameez
        </a>
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user-circle nav__icon"> </i>
                About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-sliders-v-alt nav__icon"> </i>
                Skills
              </a>
            </li>

            <li className="nav__item">
                <a
                  href="#certifications"
                  onClick={() => setActiveNav("#certifications")}
                  className={
                    activeNav === "#certifications"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-award nav__icon"> </i>
                  Certifications
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#journeys"
                  onClick={() => setActiveNav("#journeys")}
                  className={
                    activeNav === "#journeys"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-award nav__icon"> </i>
                  Journey
                </a>
              </li>
  
              <li className="nav__item">
                <a
                  href="#projects"
                  onClick={() => setActiveNav("#projects")}
                  className={
                    activeNav === "#projects"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-constructor nav__icon"> </i>
                  Projects
                </a>
              </li>
  
              <li className="nav__item">
                <a
                  href="#contact"
                  onClick={() => setActiveNav("#contact")}
                  className={
                    activeNav === "#contact"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-message nav__icon"> </i>
                  Contact
                </a>
              </li>
            {/*END nav__list*/}
  
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => setToggle(!toggle)}
          >
            {" "}
          </i>
        </div>{" "}
        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
