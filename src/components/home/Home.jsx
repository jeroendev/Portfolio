import React from 'react';
import "./home.css";
import Social from './Social';
import Data from './Data';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <section className="home__section container" id='home'>
      <Container>
        <Row className="home__container">
          <Col md={8} className="order-md-1 order-last"><Data /><Social /></Col>
          <Col md={4} className="order-md-2 order-first img-container">
            <div className="home__img"></div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Home;