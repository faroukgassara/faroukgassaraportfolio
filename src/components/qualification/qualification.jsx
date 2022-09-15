import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My Personel journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            //onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Software Architecture Engineering
                </h3>
                <span className="qualification_subtitle">
                  Private Higher School of Engineering and Technology - ESPRIT
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> Sep 2020 - Jun 2023
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Internship</h3>
                <span className="qualification_subtitle">
                  PIXIMIND "Full stack JS"
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> Jun 2022 - Aug 2022
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Internship</h3>
                <span className="qualification_subtitle">
                  PIXIMIND "Full stack JS"
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> Jul 2021 - Aug 2021
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Fundamental degree in computer science & multimedia
                </h3>
                <span className="qualification_subtitle">
                  Higher Institute of Multimedia Arts of Manouba - ISAMM
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> Sep 2020 - Jun 2023
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>

          <div className="qualification_data">
            <div></div>

            <div>
              <span className="qualification_rounder"></span>
              <span className="qualification_line"></span>
            </div>
            <div>
              <h3 className="qualification_title">Internship</h3>
              <span className="qualification_subtitle">
                CliniSys "Mobile Developer(Flutter/NodeJS)"
              </span>
              <div className="qualification_calender">
                <i className="uil uil-calendar-alt"></i> Jan 2020 - May 2020
              </div>
            </div>
          </div>

          <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                Bachelor's degree
                </h3>
                <span className="qualification_subtitle">
                Majida Boulila High School 
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> Sep 2013 - Jun 2017
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

      
        </div>
      </div>
    </section>
  );
};

export default Qualification;
