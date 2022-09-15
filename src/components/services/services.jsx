import React, { useState } from "react";
import "./services.css";
import CV from "../../assets/untitled-1.pdf";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section_title">Projects</h2>
      <span className="section_subtitle"></span>

      <div className="services_container container grid">
        <div className="services_content">
          <div>
            <i className="uil uil-arrow services_icon"></i>
            <h3 className="services_title">
              Flutter/NodeJs/
              <br />
              SQL Server
            </h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                className="uil uil-times services_modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services_modal-title">
                Flutter/NodeJs/SQL Server
              </h3>
              <p className="services_modal-description">
                This project was developed as part of the end-of-study project
                within CliniSys.
              </p>

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    I used Flutter,Nodejs and SqlServer to develop this
                    application.This application allows to establish the
                    organization and automation of the management of the medical
                    practice, in order to increase the reliability and
                    efficiency of human effort and facilitate the tedious tasks
                    inside and outside the doctor's office. it also allows the
                    patient to chat with the doctor .
                  </p>
                </li>
              </ul>
              <a
                href="https://github.com/waelbannani11/final1"
                className="contact_button"
              >
                Click Here
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="uil uil-arrow services_icon"></i>
            <h3 className="services_title">
              ReactJs/NestJs/
              <br />
              MongoDB
            </h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                className="uil uil-times services_modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services_modal-title">ReactJs/NestJs/MongoDB</h3>
              <p className="services_modal-description">
                Development of a web application for technical and digital
                services (Skills assessment, Recruitment)
                <br />
                This project was developed as part of the summer internship
                project within PIXIMIND
              </p>

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    I used Reactjs,Nestjs and MongoDb to develop this
                    application.this project offers Among the advantages of
                    online recruitment, and the overall digitization of the
                    company, the different stages of recruitment are made
                    easier. It is no longer rare to have a video phone
                    interview. To select candidates, it is also possible to have
                    them sit the exams online. Therefore, the candidate does not
                    have to travel.
                  </p>
                </li>
              </ul>
              <a
                href="https://github.com/faroukgasara/reactjs"
                className="contact_button"
              >
                Click Here(FrontEnd)
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a><br/>

              <a
                href="https://github.com/faroukgasara/nest"
                className="contact_button"
              >
                Click Here(BackEnd)
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="uil uil-arrow services_icon"></i>
            <h3 className="services_title">Symfony/JavaFX/<br/>CodenameOne</h3>
          </div>

          <span className="services_button " onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                className="uil uil-times services_modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services_modal-title">Symfony/JavaFX/CodenameOne</h3>
              <p className="services_modal-description">
                Academic Project.
              </p>

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                  A professional social network that facilitates contacts between the members of this network(employees,companies) An integrated project consists of 3 Technologies: JAVA(JavaFX),WEB(Symfony),Mobile(CodeNameOne).
                  </p>
                </li>
              </ul>

              <a
                href="https://github.com/wassim19/Projet-PI"
                className="contact_button"
              >
                Click Here(Symfony)
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a><br/>

              <a
                href="https://github.com/faroukgasara/PICodeName"
                className="contact_button"
              >
                Click Here(CodeNameOne)
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a><br/>

              <a
                href="https://github.com/faroukgasara/PIJAVAFX"
                className="contact_button"
              >
                Click Here(JavaFX)
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="uil uil-arrow services_icon"></i>
            <h3 className="services_title">
              ReactJs/NestJs/
              <br />
              Microcervices /<br />MongoDB/RabbitMQ
            </h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(4)}>
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div
            className={
              toggleState === 4
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                className="uil uil-times services_modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services_modal-title">ReactJs/NestJs/MongoDB/Microcervices/<br/>RabbitMQ</h3>
              <p className="services_modal-description">
              an application for managing access and application privileges:<br/>
              - Result: a single login and password allows access to the different apps registered in the system.
                <br />
                This project was developed as part of the summer internship
                project within PIXIMIND
              </p>

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                  Insert applications into the system via their links.
                  </p>
                </li>


                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                  loading application privileges and groups of privileges.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                  add users to the application: email, password.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                  Access management via the application.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                  If the user is not subscribed to one of the applications, the application requests the privileges of the applications.
                  </p>
                </li>
              </ul>
              <a
                href="https://github.com/faroukgassara/microservices-react-js"
                className="contact_button"
              >
                Click Here(FrontEnd)
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a><br/>

              <a
                href="https://github.com/faroukgassara/microservices-nest-js"
                className="contact_button"
              >
                Click Here(BackEnd/Microcervices)
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a><br/>

              <a
                href="https://github.com/faroukgassara/microservices-nest-js-producer"
                className="contact_button"
              >
                Click Here(BackEnd)
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="uil uil-arrow services_icon"></i>
            <h3 className="services_title">Angular/Spring Boot/<br/>MySQL/R</h3>
          </div>

          <span className="services_button " onClick={() => toggleTab(5)}>
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div
            className={
              toggleState === 5
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                className="uil uil-times services_modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services_modal-title">Angular/Spring Boot/<br/>MySQL/R</h3>
              <p className="services_modal-description">
                Academic Project.
              </p>

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                  Virtual assistance plan, a plan that protects women from being devalued and discriminated against, and this is what this project offers among the benefits of online employment, comprehensive digitization, a forum for discussing women’s problems among themselves and among experts and providing assistance to all women In the event that there is a need in addition to providing workshops and charitable events through this project.
                  </p>
                </li>
              </ul>

              <a
                href="https://github.com/faroukgasara/PIProjectFront/tree/farouk"
                className="contact_button"
              >
                Click Here(FrontEnd)
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a><br/>

              <a
                href="https://github.com/faroukgasara/PIProjectBackend"
                className="contact_button"
              >
                Click Here(BackEnd)
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a><br/>

              <a
                download="" href={CV}
                className="contact_button"
              >
                Click Here(Documentation)
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
