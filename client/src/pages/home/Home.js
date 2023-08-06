import React from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap'
import NavbarComp from '../../components/NavbarComp'
import Footer from '../../components/Footer'
import '../../components/fonts/font.css'
import './Home.css'
import '../../components/fonts/font.css'
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
            <h1 className="content-title">KKNT</h1>
            <h3 className="content-title-child">Smart Campus Tamalanrea Makassar</h3>
            <p>Kkn ini terdiri dari 41 orang</p>
          </Col>
          <Col sm={6} md={6}>
            <img className="content-img" src={ImgList.FS2} />
          </Col>
        </Row>

        <Row>
          <Col sm={5} md={{ order: 'last' }}>
            <h1 className="content-title">KKNT</h1>
            <h3 className="content-title-child">Smart Campus Tamalanrea Makassar</h3>
            <p>Kkn ini terdiri dari 41 orang</p>
          </Col>
          <Col sm={6} md={{ order: 'first' }}>
            <img className="content-img" src={ImgList.FS2} />
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
};

export default Home;