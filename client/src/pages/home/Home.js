import React from 'react'
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
              src="https://iili.io/Ht8dG6X.jpg"
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
              src="https://iili.io/Ht8dVFn.jpg"
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
              src="https://iili.io/Ht8dWas.jpg"
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
              src="https://iili.io/Ht8dX8G.jpg"
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
        <Row className="dpk-row">
          {/* <Col sm={6} md={12}>
          <div className="judul Home">
            <h3>KKNT Smart Campus Tamalanrea Makassar</h3>
          </div>
          </Col> */}

          <Col sm={12} md={12}>
            <div className="dpk-Title-container">
              <h1 className="dpk-Title">OUR DPK</h1>
            </div>
          </Col>

          <Col sm={6} md={5}>
            <div className="dpk-img-container">
              <img className="dpk-img" src="https://iili.io/Ht8JDvf.md.png" alt='DPK' />
              <div className="dpk-img-border"></div>
            </div>
          </Col>
          <Col sm={6} md={3} >
            <div className="dpk-info-container">
              <h3 className="dpk-title">Amril Hans, S.AP., MPA </h3>
              <p className="dpk-title-child">Amril Hans, S.AP., MPA, seorang DPK di KKNT GEL.110 Smart Campus Tamalanrea Makassar, adalah pendamping berpengalaman dalam proyek KKN kami. Dengan jaringan yang luas, beliau membantu kami meraih persetujuan dari WR 1 Prof. drg. Muhammad Ruslin MKes PhD SpBM(K) dan memberikan bimbingan berharga dalam pengambilan keputusan. Keahlian dan pengalaman Amril Hans telah berkontribusi signifikan terhadap kelancaran serta kesuksesan proyek kami.</p>
            </div>
          </Col>
        </Row>

        <hr></hr>

        <Col sm={12} md={12}>
          <div className="apa-Title-conta">
            <h1 className="apa-Title">WHAT ARE WE DOING?</h1>
          </div>
        </Col>

        <Row className="what-row">
          <Col sm={6} md={4}>
            <div className="what-img-container">
              <img className="what-img" src="https://iili.io/Ht8fyjj.md.jpg" />
              <div className="what-img-border"></div>
            </div>
          </Col>
          <Col sm={6} md={6}>
            <h3 className="content-title">Smart Campus Tamalanrea</h3>
            <p className="content-child">KKNT Smart Campus Tamalanrea Makassar Gel.110 adalah kelompok beranggotakan
              41 mahasiswa yang terfokus pada meningkatkan kesadaran dan implementasi
              Sustainable Development Goals (SDGS) di lingkungan kampus, memprioritaskan
              kesehatan mental mahasiswa, dan merancang sebuah aplikasi web untuk mempermudah
              navigasi di dalam kampus, dengan tujuan menciptakan lingkungan kampus yang peduli
              terhadap isu global, kesejahteraan mental, dan teknologi modern.</p>
          </Col>
        </Row>

        {/* <Row>
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
        </Row> */}
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