import React from "react";
import "./about.css";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <section className="about__section bg-body-secondary" id="about">
      <Container>
        <h1 className="about__title">About</h1>
        <h3 className="about__subtitle mb-4">Get to know me</h3>
        <Row className="about__container">
          <Col
            md={6}
            className="order-md-1 about__me-img d-flex align-items-center"
          >
            <div className="about__img"></div>
          </Col>
          <Col md={6} className="order-md-2">
            <p className="about__text">
              I'm Jeroen, a passionate developer with a background in .NET
              programming from CREO Kortrijk. I've honed my front-end skills
              after this journey. My focus is on creating high-quality,
              user-friendly interfaces. I thrive on collaborating with diverse
              teams and tackling challenging projects.
              <br />
              <br />
              Committed to continuous growth, I stay abreast of the latest
              trends in front-end development to ensure my work remains
              innovative and relevant. I look forward to contributing to
              exciting projects and adding value to your team. For more
              information or to discuss potential collaborations, feel free to
              reach out. Let's build something amazing together!
            </p>
          </Col>
        </Row>

        <div className="skills__container">
          <h3 className="skills__title">
            Tech Stack&nbsp;
            <span className="skill1"> | HTML5</span>
            <span className="skill2"> | CSS3</span>
            <span className="skill3"> | JavaScript</span>
            <span className="skill4"> | Bootstrap</span>
            <span className="skill5"> | Tailwind CSS</span>
            <span className="skill6"> | React</span>
            <span className="skill7"> | Vite</span>
          </h3>
          <div className="skills__logos d-flex flex-wrap justify-content-between">
            <div className="skills__card card1">
              <img
                className="skills__img"
                src="https://skillicons.dev/icons?i=html"
                alt="HTML5"
              />
            </div>
            <div className="skills__card card2">
              <img
                className="skills__img"
                src="https://skillicons.dev/icons?i=css"
                alt="CSS3"
              />
            </div>
            <div className="skills__card card3">
              <img
                className="skills__img"
                src="https://skillicons.dev/icons?i=js"
                alt="JavaScript"
              />
            </div>
            <div className="skills__card card4">
              <img
                className="skills__img"
                src="https://skillicons.dev/icons?i=bootstrap"
                alt="Bootstrap"
              />
            </div>
            <div className="skills__card card5">
              <img
                className="skills__img"
                src="https://skillicons.dev/icons?i=tailwind"
                alt="Tailwind CSS"
              />
            </div>
            <div className="skills__card card6">
              <img
                className="skills__img"
                src="https://skillicons.dev/icons?i=react"
                alt="React"
              />
            </div>
            <div className="skills__card card7">
              <img
                className="skills__img"
                src="https://skillicons.dev/icons?i=vite"
                alt="Vite"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
