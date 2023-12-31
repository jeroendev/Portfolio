import React from 'react'
import './about.css'

const About = () => {
  return (
    <section className="about__section bg-secondary-subtle" id='about'>
      <h1 className="about__title">About</h1>
      <h3 className="about__subtitle">Get to know me</h3>
      <div className="about__main container">
        <div className="about__me">
        <div className="about__img"></div>
        
      <p className='about__text'>I'm Jeroen, a passionate developer with a background in .NET programming from CREO Kortrijk. I've honed my front-end skills after this journey.
My focus is on creating high-quality, user-friendly interfaces. I thrive on collaborating with diverse teams and tackling challenging projects.<br/><br/>
Committed to continuous growth, I stay abreast of the latest trends in front-end development to ensure my work remains innovative and relevant.
I look forward to contributing to exciting projects and adding value to your team. For more information or to discuss potential collaborations, feel free to reach out. Let's build something amazing together!</p>
      

    <div className='skills__container'>
        <h3 className="skills__title">Tech Stack&nbsp;
        <span className='skill1'> | HTML5 & CSS3</span>
        <span className='skill2'> | JavaScript & TypeScript</span>
        <span className='skill3'> | Bootstrap & Tailwind CSS</span>
        <span className='skill4'> | React & Vite</span>
        </h3>
        <div className='skills__logos'>
            <div className='parent__skills'>
              <div className="skillset">
            <div className='skills__card card1'>
                <img className='skills__img' src="https://skillicons.dev/icons?i=html,css" alt="HTML and CSS" />
              </div>
              <div className='skills__card card2'>
                <img className='skills__img' src="https://skillicons.dev/icons?i=js,ts" alt="JavaScript and TypeScript" />
              </div>
              <div className='skills__card card3'>
                <img className='skills__img' src="https://skillicons.dev/icons?i=bootstrap,tailwind" alt="Bootstrap and Tailwind CSS" />
              </div>
              <div className='skills__card card4'>
                <img className='skills__img' src="https://skillicons.dev/icons?i=react,vite" alt="React and Vite" />
              </div>
              </div>
            </div>
        </div>
        </div>
        </div>
    </div>
    </section>
  )
}

export default About