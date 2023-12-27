import React from 'react';
import "./home.css";
import Social from './Social';
import Data from './Data';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <section className="home__section" id='home'>
      <Container>
        <div className="parent home__container">
          <div className="div2"><Data /><Social /></div>
          <div className="home__img"></div>
        </div>
      </Container>
    </section>
  )
}

export default Home