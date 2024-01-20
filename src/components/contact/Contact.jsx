import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_wlqxlgm",
      "template_otn0dma",
      form.current,
      "DWVvjphnAF8ycIMpm"
    );
    e.target.reset();
  };

  return (
    <section className="contact__section bg-body-secondary" id="contact">
      <h1 className="contact__title">Get in touch</h1>
      <h3 className="contact__subtitle">Contact me</h3>

      <Container className="parent__contact container">
        <Row>
          <Col md={6} className="contact__container">
            <div className="contact__info-email">
              <div className="contact__card">
                <i className="bx bx contact__card-icon"></i>

                <h3 className="contact__card-title">
                  Email <i className="bx bx-envelope"></i>
                </h3>
                <a
                  href="mailto:jeroen.devis61@gmail.com"
                  className="contact__button-email"
                >
                  jeroen.devis61@gmail.com
                </a>
              </div>
            </div>

            <div className="contact__info-location">
              <div className="contact__card">
                <i className="bx bx contact__card-icon"></i>

                <h3 className="contact__card-title">
                  Location <i class="bx bx-current-location"></i>
                </h3>
                <a
                  href="https://www.google.com/maps/place/Herzele/@50.8699695,3.8110874,12z/data=!3m1!4b1!4m6!3m5!1s0x47c3a13f67243e67:0x25d5b19594d36873!8m2!3d50.8844695!4d3.8928574!16zL20vMDE0ODYx?entry=ttu"
                  target="_blank"
                  className="contact__button-email"
                >
                  Herzele, Belgium
                </a>
              </div>
            </div>
          </Col>

          <Col className="contact__formsection">
            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <div className="contact__form-div mb-3">
                <label className="contact__form-tag small bg-body-secondary">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="contact__form-input"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="contact__form-div mb-3">
                <label className="contact__form-tag small bg-body-secondary">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="contact__form-input"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="contact__form-div mb-3">
                <label className="contact__form-tag small bg-body-secondary">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="contact__form-input"
                  placeholder="Enter Subject"
                />
              </div>

              <div className="contact__form-div contact__form-area mb-3">
                <label
                  className="contact__form-tag small bg-body-secondary"
                  required
                >
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  cols="30"
                  rows="10"
                  className="contact__form-input"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-dark">
                Send Message <i className="bx bx-send"></i>
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
