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

          <Col sm={6} md={5} className="dpk-col">
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
          <Col sm={6} md={4} className="what-row">
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
                COOMING SOON
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className="accordion-item">
              <Accordion.Header>SDGS UNHAS</Accordion.Header>
              <Accordion.Body>
                COOMING SOON
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className="accordion-item">
              <Accordion.Header>UNHAS MAPPING</Accordion.Header>
              <Accordion.Body>
                <div className="content-container">
                  <div className="image-content">
                    <div className="image-pair">
                      {/* <img src="gambar1.jpg" alt="Gambar 1" className="gambar-proker" /> */}
                      <p className="map-unhas">
                        Salah satu proker KKN kami adalah pengembangan Website Navigation kampus dengan QR code untuk memudahkan mahasiswa mencari ruangan dan titik lokasi di kampus, menjawab masalah kurangnya pengetahuan tentang layout kampus terutama bagi mahasiswa baru.
                      </p>
                    </div>

                    <div className="image-pair">
                      <img src="https://iili.io/Ht8fpTb.md.jpg" alt="Gambar 2"  className="gambar-proker"/>

                      <p className="map-unhas">
                        Tim KKN kami membagi diri menjadi empat kelompok yang bertugas untuk mendata ruangan-ruangan di berbagai fakultas di kampus. Pengumpulan data dilakukan dengan menggunakan aplikasi Avenza, di mana kami memasukkan informasi berupa nama ruangan, koordinat latitude dan longitude, serta deskripsi lantai dari setiap ruangan. Selama hampir dua minggu, kami mengumpulkan data ini secara komprehensif, juga melengkapi informasi dengan gambar-gambar yang mendukung.
                      </p>
                    </div>

                    <div className="image-pair">
                      <img src="https://iili.io/Ht8fbyu.md.jpg" alt="Gambar 3" className="gambar-proker" />
                      <p className="map-unhas">
                        Setelah tahap pengumpulan data selesai, kami melanjutkan ke proses pengolahan data. Semua informasi yang telah terkumpul dari berbagai kelompok disatukan menjadi satu database. Database ini akan menjadi dasar informasi yang akan diintegrasikan ke dalam website yang kami rencanakan.
                      </p>
                    </div>

                    <div className="image-pair">
                      <img src="https://iili.io/HtrWAJ4.md.jpg" alt="Gambar 3" className="gambar-proker" />
                      <p className="map-unhas">
                        Langkah selanjutnya adalah proses pembuatan website navigasi. Website ini dirancang dengan fitur-fitur yang telah dijelaskan sebelumnya, seperti penggunaan QR code, navigasi berbasis peta interaktif, dan deskripsi ruangan. Tujuannya adalah agar para pengguna website dapat dengan mudah mengakses informasi lokasi ruangan dan merencanakan rute dengan efisien.
                      </p>
                    </div>

                    <div className="image-pair">
                      <img src="https://iili.io/Htr5hbf.md.jpg" alt="Gambar 3" className="gambar-proker" />
                      <p className="map-unhas">
                        Sebagai bagian dari proyek ini, kami merancang spanduk-spanduk yang berisi QR code yang dapat discan. QR code ini akan mengarahkan pengguna ke website navigasi yang telah kami kembangkan. Untuk memastikan efektivitasnya, kami mengidentifikasi titik-titik krusial dan area strategis di dalam fakultas-fakultas yang tepat untuk dipasang QR code. Ini memerlukan kerja sama yang baik dengan pihak fakultas untuk menentukan posisi yang optimal.
                      </p>
                    </div>

                    <div className="image-pair">
                      <img src="gambar3.jpg" alt="Gambar kalo terpasang mi stand QR" className="gambar-proker" />
                      <p className="map-unhas">
                        Dengan demikian, proyek ini menggabungkan usaha pengumpulan data yang komprehensif, pengolahan data yang cermat, serta pengembangan website yang inovatif. Dengan adanya spanduk-spanduk QR code dan pemasangan QR code di titik-titik penting, proyek ini diharapkan dapat secara signifikan meningkatkan kemudahan navigasi dan pengenalan ruangan bagi para mahasiswa di dalam lingkungan kampus.
                      </p>
                    </div>
                  </div>
                  <div class="text-content">
                  </div>
                </div>
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