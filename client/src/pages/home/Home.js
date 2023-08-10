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
              <p className="dpk-title-child">Amril Hans, S.AP., MPA, seorang Dosen Pembimbing KKN di KKNT GEL.110 Smart Campus Tamalanrea Makassar, merupakan pendamping berpengalaman dalam proyek KKN kami. Dengan jaringan yang luas, beliau membantu kami memperoleh persetujuan dari WR 1 Prof. drg. Muhammad Ruslin, M.Kes., Ph.D., SpBM(K) serta memberikan bimbingan berharga dalam pengambilan keputusan. Keahlian dan pengalaman Amril Hans telah memberikan kontribusi yang signifikan terhadap kelancaran serta kesuksesan proyek kami.</p>
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
                <div className="content-container">
                  <div className="content-pair">
                    {/* <div className="carousel-container-proker">
                      <Carousel fade>
                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/Ht8fpTb.md.jpg" alt="Gambar 2" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>

                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/Ht8fbyu.md.jpg" alt="Gambar 3" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>
                      </Carousel>
                    </div> */}
                    <div className="text-content-mental-1">
                      <p className="map-unhas">
                        Salah satu dari program kerja KKNT Smart Campus Tamalanrea Makassar ialah mengadakan sebuah event bertajuk kesehatan mental. Dalam semangat untuk menciptakan perubahan positif dalam kesadaran mengenai kesehatan mental, kami dengan penuh antusiasme mengadakan sebuah kegiatan untuk membantu Unhas menjadi kampus yang lebih baik. "Mental Health Festival" dengan tema : "Pikiran Bahagia Hidup Sehat: Memperkuat Akan Kesadaran Kesehatan Mental Gen Z" ini kami rangkaiakan dengan salah satu program kerja wajib bagi KKNT Gel. 110 Unhas kali ini yaitu donor darah.
                      </p>
                    </div>
                  </div>

                  <div className="content-pair">
                    {/* <div className="carousel-container-proker">
                      <Carousel fade>
                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/Ht8fpTb.md.jpg" alt="Gambar 2" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>

                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/Ht8fbyu.md.jpg" alt="Gambar 3" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>
                      </Carousel>
                    </div> */}
                    <div className="text-content-mental-1">
                      <p className="map-unhas">
                        Perjalanan festival dimulai dengan penentuan tema yang kuat dan relevan. "Pikiran Bahagia Hidup Sehat" menjadi titik awal untuk menjelajahi secara mendalam tentang pentingnya fondasi kesehatan mental yang kokoh dalam menjalani kehidupan sehari-hari. Tentu saja festival ini kita rangkaikan dengan kegiatan donor darah karena dengan mendonor kita juga bisa menjaga tubuh kita agar tetap sehat.
                      </p>
                    </div>
                  </div>

                  <div className="content-pair">
                    {/* <div className="carousel-container-proker">
                      <Carousel fade>
                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/Ht8fpTb.md.jpg" alt="Gambar 2" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>

                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/Ht8fbyu.md.jpg" alt="Gambar 3" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>
                      </Carousel>
                    </div> */}
                    <div className="text-content-mental-1">
                      <p className="map-unhas">
                        Dengan tekad untuk memberikan pemahaman mendalam, kami dengan rendah hati menjalin kerja sama dengan Prodi Psikologi Universitas Hasanuddin. Langkah ini akan memastikan bahwa kegiatan ini tidak hanya berkesan tetapi juga berbasis ilmiah, mendukung pendekatan profesional dalam menyuarakan pentingnya kesehatan mental. Bapak Dr. Ichlas Nanang Affandi, S.Psi., M.A. selaku ketua Prodi Psikologi turut membantu kami dengan menjadi salah satu pembicara kami.
                      </p>
                    </div>
                  </div>

                  <div className="content-pair">
                    <div className="carousel-container-proker">
                      <Carousel fade>
                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/HtDOYYv.md.jpg" alt="Gambar 2" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>

                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/HtDOavR.md.jpg" alt="Gambar 3" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>

                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/HtDOg6u.md.jpg" alt="Gambar 3" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>                        
                        
                      </Carousel>
                    </div>
                    <div className="text-content">
                      <p className="map-unhas">
                        Kami dengan gembira berkolaborasi dengan KSR PMI Universitas Hasanuddin dan PMI Kota Makassar. Bersama mereka, kami menyelenggarakan sesi donor darah yang juga menjadi salah satu dari rangkaian kegiatan kami. Komitmen kami terhadap perubahan positif lebih diperkuat dengan kolaborasi bersama SDGs Center Universitas Hasanuddin. Bersama-sama, kami akan menjembatani kesenjangan antara kesehatan mental dan tujuan pembangunan berkelanjutan. Kami juga memiliki kesempatan untuk berkolaborasi dengan Satuan Tugas Pencegahan dan Penanganan Kekerasan Seksual (Satgas PPKS) Universitas Hasanuddin. Kehadiran mereka akan memberikan pandangan yang berharga tentang perlunya kesadaran akan kesehatan mental dalam menghadapi berbagai tantangan sosial salah satunya ialah mengenai kekerasan seksual yang terjadi di lingkup kampus Unhas
                      </p>
                    </div>
                  </div>

                  <div className="content-pair">
                    <div className="carousel-container-proker">
                      <Carousel fade>
                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/HtDOAEg.md.jpg" alt="Gambar 2" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>

                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/HtDOwv4.md.jpg" alt="Gambar 3" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>

                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/HtDefnt.md.jpg" alt="Gambar 3" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>
                        
                      </Carousel>
                    </div>
                    <div className="text-content">
                      <p className="map-unhas">
                        Dengan kolaborasi bersama mereka, kami memiliki kesempatan untuk menghadirkan duta SDGs Universitas Hasanuddin, kak Agil Parwan dan juga perwakilan dari tim Satgas PPKS Unhas, bapak Dr. Iskandar, S.Sos., M.Si., selaku sekretaris Satgas PPKS Unhas yang juga berperan sebagai perwakilan dan pembawa materi mengenai kekerasan seksual menggantikan ibu Prof. Dr. Farida Pattitingi, S.H., M.Hum. selaku ketua Satgas PPKS sekaligus Wakil Rektor Bidang Sumber Daya Manusia, Alumni, dan Sitem Informasi.
                      </p>
                    </div>
                  </div>

                  <div className="content-pair">
                    <div className="carousel-container-proker">
                      <Carousel fade>
                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/HtDOR4a.md.jpg" alt="Gambar 2" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>

                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/HtDeH8v.md.jpg" alt="Gambar 3" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>

                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/HtDeAtS.md.png" alt="Gambar 3" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>
                        
                      </Carousel>
                    </div>
                    <div className="text-content">
                      <p className="map-unhas">
                        Kami telah mengirimkan undangan kepada seluruh Unit Kegiatan Mahasiswa (UKM) di Universitas Hasanuddin. Melalui partisipasi mereka, kami berharap dapat menciptakan gerakan yang kuat dalam mendukung kesadaran kesehatan mental, pembangunan berkelanjutan dan juga menciptakan kampus aman tanpa adanya kekerasan seksual. Dalam upaya untuk mencapai inklusivitas, kami juga telah mengundang Kuliah Kerja Nyata Tematik (KKNT) yang poskonya berlokasi di Kota Makassar dengan harapan bahwa pesan positif ini akan merasuk lebih dalam di berbagai kalangan mahasiswa Universitas Hasanuddin.
                      </p>
                    </div>
                  </div>

                  <div className="content-pair">
                    <div className="carousel-container-proker">
                      <Carousel fade>
                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/HtDO73J.md.jpg" alt="Gambar 2" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>

                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/HtyoCpp.md.jpg" alt="Gambar 3" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>

                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/HtyooTN.md.jpg" alt="Gambar 3" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>
                        
                      </Carousel>
                    </div>
                    <div className="text-content">
                      <p className="map-unhas">
                        Tema festival akan hidup melalui berbagai properti yang dirancang khusus mulai dari dekorasi penuh kreativitas hingga booth interaktif yang didukung penuh oleh teman teman dari program kerja SDGs yang bekerja sama langsung dengan SDGs Center Unhas, setiap detail akan menciptakan lingkungan yang mendukung semangat kesehatan mental yang positif dan mendukung pembangunan berkelanjutan.
                      </p>
                    </div>
                  </div>

                  <div className="content-pair">
                    {/* <div className="carousel-container-proker">
                      <Carousel fade>
                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/Ht8fpTb.md.jpg" alt="Gambar 2" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>

                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/Ht8fbyu.md.jpg" alt="Gambar 3" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>
                      </Carousel>
                    </div> */}
                    <div className="text-content-mental-1">
                      <p className="map-unhas">
                        Sebagai bentuk komitmen nyata terhadap kesehatan fisik dan mental, kami telah mempersiapkan sesi donor darah bersama PMI. Tindakan ini adalah cerminan dari semangat peduli dan solidaritas sosial. Kegiatan ini akan mencapai puncaknya dengan talkshow yang informatif dan inspiratif. Melalui sesi ini, para ahli dan narasumber akan berbagi wawasan dan pengalaman tentang pentingnya menjaga kesehatan mental dan lebih peduli terhadap kekerasan seksual dalam menjalani kehidupan sehari-hari yang tentu saja berkaitan dengan poin-poin SDGs.
                      </p>
                    </div>
                  </div>

                  <div className="content-pair">
                    {/* <div className="carousel-container-proker">
                      <Carousel fade>
                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/Ht8fpTb.md.jpg" alt="Gambar 2" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>

                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/Ht8fbyu.md.jpg" alt="Gambar 3" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>
                      </Carousel>
                    </div> */}
                    <div className="text-content-mental-1">
                      <p className="map-unhas">
                        Dengan rasa bangga dan terima kasih, kami akan mengakhiri "Mental Health Festival". Namun, semangat dan kesadaran yang telah ditanamkan dalam acara ini akan terus berlanjut dalam setiap langkah kita menuju kesehatan mental yang lebih baik dan masyarakat yang lebih peduli.
                      </p>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className="accordion-item">
              <Accordion.Header>SDGS UNHAS</Accordion.Header>
              <Accordion.Body>
              <div className="content-container">
                  <div className="content-pair">
                    {/* <div className="carousel-container-proker">
                      <Carousel fade>
                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/Ht8fpTb.md.jpg" alt="Gambar 2" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>

                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/Ht8fbyu.md.jpg" alt="Gambar 3" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>
                      </Carousel>
                    </div> */}
                    <div className="text-content-mental-1">
                      <p className="map-unhas">
                      Dalam rangka mewujudkan komitmen Universitas Hasanuddin terhadap pencapaian Sustainable Development Goals (SDGs), kami membuat suatu program kerja SDGs yang dirancang untuk mengoptimalkan integrasi dan implementasi SDGs di lingkungan kampus. Proker ini memuat berbagai kegiatan untuk mengedukasi, menyebarkan awareness, dan berkolaborasi dengan pihak-pihak terkait di Universitas Hasanuddin.
                      </p>
                    </div>
                  </div>

                  <div className="content-pair">
                    {/* <div className="carousel-container-proker">
                      <Carousel fade>
                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/Ht8fpTb.md.jpg" alt="Gambar 2" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>

                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/Ht8fbyu.md.jpg" alt="Gambar 3" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>
                      </Carousel>
                    </div> */}
                    <div className="text-content-mental-1">
                      <p className="map-unhas">
                      Kegiatan pertama yang kami lakukan adalah berkunjung ke SDGs Center Universitas Hasanuddin. Kunjungan yang kami lakukan bertujuan untuk memahami lebih dalam mengenai upaya Universitas Hasanuddin dalam mempromosikan dan menerapkan prinsip-prinsip SDGs di seluruh aspek kehidupan. Kami mendapatkan berbagi insight dan masukkan mengenai apa yang dapat kami lakukan sebagai mahasiswa untuk membantu upaya mewujudkan SDGs di Universitas Hasanuddin secara keseluruhan.                        
                      </p>
                    </div>
                  </div>

                  <div className="content-pair">
                    <div className="carousel-container-proker">
                      <Carousel fade>
                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/HDJnUN4.md.jpg" alt="Gambar 2" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>

                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/HDJnPi7.md.jpg" alt="Gambar 3" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>

                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/HDJnbOx.md.jpg" alt="Gambar 3" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <div className="text-content">
                      <p className="map-unhas">
                      Setelah kunjungan tersebut, kami akhirnya memfokuskan salah satu kegiatan yang akan kami lakukan yaitu pembuatan konten instagram untuk menyebarkan awareness mengenai SDGs, mengingat bahwa pengetahuan mahasiswa dan warga kampus masih minim mengenai SDGs. Melalui pembuatan konten ini, diharapkan bahwa pengetahuan dan kesadaran mahasiswa mengenai SDGs di Universitas Hasanuddin akan bertambah dan dapat mendukung upaya pencapaian SDGs di kampus.
                      </p>
                    </div>
                  </div>

                  <div className="content-pair">
                    <div className="carousel-container-proker">
                      <Carousel fade>
                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/HDJngDl.md.jpg" alt="Gambar 2" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>

                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/HDJn4x2.md.jpg" alt="Gambar 3" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>

                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/HDJntHb.md.jpg" alt="Gambar 3" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>                        
                        
                      </Carousel>
                    </div>
                    <div className="text-content">
                      <p className="map-unhas">
                      Kami pun membuat booth SDGs di dalam acara Mental Health Festival sebagai upaya untuk pengenalan lebih lanjut mengenai SDGs kepada para peserta yang hadir di acara tersbut. Kami menyediakan properti-properti seperti box-box SDGs, totebag, tumblr, stiker, snack, serta quiz seputar SDGs Unhas yang ditanyakan kepada setiap peserta yang berkunjung ke booth kami dengan hadiah totebag dan tumblr.
                      </p>
                    </div>
                  </div>

                  <div className="content-pair">
                    <div className="carousel-container-proker">
                      <Carousel fade>
                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/HDJn8HG.md.jpg" alt="Gambar 2" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>

                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/HDJnSRf.md.jpg" alt="Gambar 3" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>

                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/HDJnmDQ.md.jpg" alt="Gambar 3" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>
                        
                      </Carousel>
                    </div>
                    <div className="text-content">
                      <p className="map-unhas">
                      Kegiatan selanjutnya yang berkaitan dengan poin SDGs nomor 16 “Peace, Justice and Strong Institutions”, kami berkolaborasi dengan Satgas Pencegahan dan Penanganan Kekerasan Seksual (PPKS) Universitas Hasanuddin. Kami mengundang Ketua Satgas PPKS Unhas, Prof. Dr. Farida Patittingi, SH., M.Hum sebagai pembicara dalam Mental Health Festival, yang mana diwakili oleh Sekretaris Satgas Dr. Iskandar, S.Sos., M.Si. Hal ini merupakan suatu upaya untuk mengintegrasikan isu kekerasan seksual dengan kesehatan mental yang merupakan salah satu bagian dari SDGs. 
                      </p>
                    </div>
                  </div>

                  <div className="content-pair">
                    <div className="carousel-container-proker">
                      <Carousel fade>
                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/HDJnkSs.md.jpg" alt="Gambar 2" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>

                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/HDJnQUu.md.jpg" alt="Gambar 3" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>

                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/HDJnDRj.md.jpg" alt="Gambar 3" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>
                        
                      </Carousel>
                    </div>
                    <div className="text-content">
                      <p className="map-unhas">
                      Kami pun turut berkolaborasi dengan SDGs Center yaitu dengan mengundang Duta Kampus SDGs Tahun 2020-2022, Agil Parwan untuk menjadi moderator dalam acara Mental Health Festival yang mana dapat menambahkan penyebaran wawasan dan awareness mengenai SDGs kepada para peserta yang merupakan mahasiswa-mahasiswa Universitas Hasanuddin.
                      </p>
                    </div>
                  </div>

                  <div className="content-pair">
                    <div className="carousel-container-proker">
                      <Carousel fade>
                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/HDJnsf9.md.jpg" alt="Gambar 2" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>

                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/HDJnLle.md.jpg" alt="Gambar 3" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>

                        {/* <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/HtyooTN.md.jpg" alt="Gambar 3" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item> */}
                        
                      </Carousel>
                    </div>
                    <div className="text-content">
                      <p className="map-unhas">
                      Kegiatan terakhir yang kami lakukan merupakan implementasi dari poin SDGs nomor 6 “Clean Water and Sanitation”. Kami menyadari masih kurangnya sanitasi yang sesuai dengan Pola Hidup Bersih dan Sehat (PHBS) di Universitas Hasanuddin. Untuk mendapatkan pandangan expert, kami mengunjungi Departemen PKIP di Fakultas Kesehatan Masyarakat dan mewawancarai Ibu Dr. Shanti Riskiyani, SKM,.M.Kes mengenai PHBS di Universitas Hasanuddin. Setelah mendapatkan pengetahuan lebih dalam mengenai PHBS, kami mulai melakukan observasi dan identifikasi terhadap toilet dan kantin yang ada di Universitas Hasanuddin. Selanjutnya, kami membuatkan policy brief mengenai hasil identifikasi kami untuk diteruskan kepada pihak kampus sebagai bahan pertimbangan untuk pengimplementasian sanitasi yang lebih layak dan sesuai dengan PHBS di Universitas Hasanuddin.
                      </p>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className="accordion-item">
              <Accordion.Header>UNHAS MAPPING</Accordion.Header>
              <Accordion.Body>
                <div className="content-container">
                  <div className="content-pair">
                    <div className="carousel-container-proker">
                      <Carousel fade>
                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/Ht8fpTb.md.jpg" alt="Gambar 2" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>

                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/Ht8fbyu.md.jpg" alt="Gambar 3" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>
                        {/* Repeat for other images */}
                      </Carousel>
                    </div>
                    <div className="text-content">
                      <p className="map-unhas">
                        Tim KKN kami membagi diri menjadi empat kelompok yang bertugas untuk mendata ruangan-ruangan di berbagai fakultas di kampus. Pengumpulan data dilakukan dengan menggunakan aplikasi Avenza, di mana kami memasukkan informasi berupa nama ruangan, koordinat latitude dan longitude, serta deskripsi lantai dari setiap ruangan. Selama hampir dua minggu, kami mengumpulkan data ini secara komprehensif, juga melengkapi informasi dengan gambar-gambar yang mendukung.
                      </p>
                    </div>
                  </div>

                  <div className="content-pair">
                    <div className="carousel-container-proker">
                      <Carousel fade>
                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/Ht8fpTb.md.jpg" alt="Gambar 2" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>

                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/Ht8fbyu.md.jpg" alt="Gambar 3" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>
                        {/* Repeat for other images */}
                      </Carousel>
                    </div>
                    <div className="text-content">
                      <p className="map-unhas">
                        Setelah tahap pengumpulan data selesai, kami melanjutkan ke proses pengolahan data. Semua informasi yang telah terkumpul dari berbagai kelompok disatukan menjadi satu database. Database ini akan menjadi dasar informasi yang akan diintegrasikan ke dalam website yang kami rencanakan.
                      </p>
                    </div>
                  </div>

                  <div className="content-pair">
                    <div className="carousel-container-proker">
                      <Carousel fade>
                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/Ht8fpTb.md.jpg" alt="Gambar 2" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>

                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/Ht8fbyu.md.jpg" alt="Gambar 3" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>
                        {/* Repeat for other images */}
                      </Carousel>
                    </div>
                    <div className="text-content">
                      <p className="map-unhas">
                        Langkah selanjutnya adalah proses pembuatan website navigasi. Website ini dirancang dengan fitur-fitur yang telah dijelaskan sebelumnya, seperti penggunaan QR code, navigasi berbasis peta interaktif, dan deskripsi ruangan. Tujuannya adalah agar para pengguna website dapat dengan mudah mengakses informasi lokasi ruangan dan merencanakan rute dengan efisien.
                      </p>
                    </div>
                  </div>

                  <div className="content-pair">
                    <div className="carousel-container-proker">
                      <Carousel fade>
                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/Ht8fpTb.md.jpg" alt="Gambar 2" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>

                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/Ht8fbyu.md.jpg" alt="Gambar 3" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>
                        {/* Repeat for other images */}
                      </Carousel>
                    </div>
                    <div className="text-content">
                      <p className="map-unhas">
                        Sebagai bagian dari proyek ini, kami merancang spanduk-spanduk yang berisi QR code yang dapat discan. QR code ini akan mengarahkan pengguna ke website navigasi yang telah kami kembangkan. Untuk memastikan efektivitasnya, kami mengidentifikasi titik-titik krusial dan area strategis di dalam fakultas-fakultas yang tepat untuk dipasang QR code. Ini memerlukan kerja sama yang baik dengan pihak fakultas untuk menentukan posisi yang optimal.
                      </p>
                    </div>
                  </div>

                  <div className="content-pair">
                    <div className="carousel-container-proker">
                      <Carousel fade>
                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/Ht8fpTb.md.jpg" alt="Gambar 2" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>

                        <Carousel.Item>
                          <div className="image-content">
                            <img src="https://iili.io/Ht8fbyu.md.jpg" alt="Gambar 3" className="gambar-proker image-content" />
                          </div>
                        </Carousel.Item>
                        {/* Repeat for other images */}
                      </Carousel>
                    </div>
                    <div className="text-content">
                      <p className="map-unhas">
                        Dengan demikian, proyek ini menggabungkan usaha pengumpulan data yang komprehensif, pengolahan data yang cermat, serta pengembangan website yang inovatif. Dengan adanya spanduk-spanduk QR code dan pemasangan QR code di titik-titik penting, proyek ini diharapkan dapat secara signifikan meningkatkan kemudahan navigasi dan pengenalan ruangan bagi para mahasiswa di dalam lingkungan kampus.
                      </p>
                    </div>
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