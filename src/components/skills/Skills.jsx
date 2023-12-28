import React from 'react';
import { Container } from 'react-bootstrap';
import './skills.css';

const Skills = () => {
  return (
    <section className="skills__section bg-body-secondary" id='skills'>
        <Container>
    <div className='skills__container'>
        <h1 className="skills__title">Tech Stack 
        <span className='skill1'> | HTML5 & CSS3</span>
        <span className='skill2'> | JavaScript & TypeScript</span>
        <span className='skill3'> | Bootstrap & Tailwind CSS</span>
        <span className='skill4'> | React & Vite</span>
        </h1>

        <div className='skills__logos'>
            <div className='parent__skills'>
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

    </Container>
    </section>
  )
}

export default Skills