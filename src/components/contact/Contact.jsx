import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section className="contact__section bg-body-secondary" id="contact">
      <h1 className='contact_title'>Get in touch</h1>
      <h3 className='contact_subtitle'>Contact me</h3>
      <div className="parent__contact container">
        <div className="contact__header">
      
      <div className="contact__container">
        <div className="contact__content">

          <div className='contact__info-email'>
            <div className="contact__card">
              <i className="bx bx contact__card-icon"></i>

              <h3 className="contact__card-title">Email <i className="bx bx-envelope"></i></h3>
              <a href="mailto:jeroen.de.vis@live.be" className="contact__button-email">jeroen.de.vis@live.be</a>
            </div>
          </div>

          <div className='contact__info-location'>
            <div className="contact__card">
              <i className="bx bx contact__card-icon"></i>

              <h3 className="contact__card-title">Location <i class='bx bx-current-location'></i></h3>
              <a href="https://www.google.com/maps/place/Herzele/@50.8699695,3.8110874,12z/data=!3m1!4b1!4m6!3m5!1s0x47c3a13f67243e67:0x25d5b19594d36873!8m2!3d50.8844695!4d3.8928574!16zL20vMDE0ODYx?entry=ttu" target='_blank' className="contact__button-email">Herzele, Belgium</a>
            </div>
          </div>
          </div>
          </div>
        </div>

        <div className="contact__formsection">

          <form action="" className='contact__form'>
            <div className="contact__form-div mb-3">
              <label className="contact__form-tag small bg-body-secondary">Name</label>
              <input type="text" name="name" className='contact__form-input' placeholder='Enter your name' />
              </div>

              <div className="contact__form-div mb-3">
              <label className="contact__form-tag small bg-body-secondary">Email</label>
              <input type="email" name="email" className='contact__form-input' placeholder='Enter your email' />
              </div>

              <div className="contact__form-div mb-3">
              <label className="contact__form-tag small bg-body-secondary">Subject</label>
              <input type="text" name="subject" className='contact__form-input' placeholder='Enter Subject' />
              </div>

              <div className="contact__form-div contact__form-area mb-3">
              <label className="contact__form-tag small bg-body-secondary">Message</label>
              <textarea type="text" name="message" cols="30" rows="10" className='contact__form-input' placeholder='Write your message here'></textarea>
              </div>

            <button type="button" className='btn btn-outline-dark'>Send Message <i className='bx bx-send'></i></button>
          </form>

        </div>
      
      </div>
    </section>
  )
}

export default Contact