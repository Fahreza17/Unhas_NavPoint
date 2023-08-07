import React from 'react'
import LoadingSpinner from '../../components/LoadingSpinner';
import { Carousel, Container, Row, Col, Accordion } from 'react-bootstrap'
import NavbarComp from '../../components/NavbarComp'
import Footer from '../../components/Footer'
import '../../components/fonts/font.css'
import './Home.css'
import * as ImgList from '../../components/ImageList'

const Home = () => {
  return (
    <div>
      <NavbarComp />
      <div className="carousel-container">
        <Carousel fade>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={ImgList.FS1}
              alt="First slide"
            />
            <Carousel.Caption className="carousel-caption-text">
              <h3 className="kkn">KKNT GEL.110</h3>
              <p className="Smart">Smart Campus Tamalanrea Makassar</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={ImgList.FS2}
              alt="First slide"
            />
            <Carousel.Caption className="carousel-caption-text">
              <h3 className="kkn">KKNT GEL.110</h3>
              <p className="Smart">Smart Campus Tamalanrea Makassar</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={ImgList.FS3}
              alt="First slide"
            />
            <Carousel.Caption className="carousel-caption-text">
              <h3 className="kkn">KKNT GEL.110</h3>
              <p className="Smart">Smart Campus Tamalanrea Makassar</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={ImgList.FS4}
              alt="First slide"
            />
            <Carousel.Caption className="carousel-caption-text">
              <h3 className="kkn">KKNT GEL.110</h3>
              <p className="Smart">Smart Campus Tamalanrea Makassar</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <Container>
        <Row>
          <Col sm={6} md={4}>
            <img className="dpk-img" src="https://pbs.twimg.com/profile_images/1217974695/n1565582747_30082716_2483696_400x400.jpg" alt='DPK' />
          </Col>
          <Col sm={6} md={6}>
            <h1 className="dpk">DPK KKNT Smart Campus Tamalanrea Makassar GEL.110</h1>
            <h3 className="dpk-title">Amril Hans, S.AP., MPA </h3>
            <p className="dpk-title-child">Ini Dpk Kita Saat Masih Muda</p>
          </Col>
        </Row>

        <Row>
          <Col sm={6} md={4}>
            <h3 className="content-title">KKNT Smart Campus Tamalanrea Makassar</h3>
            <p></p>
          </Col>
          <Col sm={6} md={6}>
            <img className="content-img" src={ImgList.FS2} />
          </Col>
        </Row>

        <Row>
          <Col sm={5} md={{ order: 'last' }}>
            <h3 className="content-title">Smart Campus Tamalanrea</h3>
            <p>KKNT Smart Campus Tamalanrea Makassar Gel.110 adalah kelompok beranggotakan
              41 mahasiswa yang terfokus pada meningkatkan kesadaran dan implementasi
              Sustainable Development Goals (SDGS) di lingkungan kampus, memprioritaskan
              kesehatan mental mahasiswa, dan merancang sebuah aplikasi web untuk mempermudah
              navigasi di dalam kampus, dengan tujuan menciptakan lingkungan kampus yang peduli
              terhadap isu global, kesejahteraan mental, dan teknologi modern.</p>
          </Col>
          <Col sm={6} md={{ order: 'first' }}>
            <img className="content-img" src={ImgList.FS2} />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
        <Accordion flush>

          <Accordion.Item eventKey="0" className="accordion-item">
            <Accordion.Header>
            <div className="text-center">Mental Health Festival</div>
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className="accordion-item">
            <Accordion.Header>SDGS UNHAS</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className="accordion-item">
            <Accordion.Header>UNHAS MAPPING</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;