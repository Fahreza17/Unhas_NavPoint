import React from 'react';
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';
import NavbarComp from '../../components/NavbarComp';
import Footer from '../../components/Footer';
import './About.css';

const members = [
  {
    name: 'Muhammad Addeta Rukmadi',
    position: 'Ketua Organisasi',
    department: 'Departemen XYZ',
    image: 'url_ketua.jpg'
  },
  {
    name: 'Zhafirah Alda Nizaroh',
    position: 'Sekretaris',
    department: 'Departemen XYZ',
    image: 'url_sekretaris.jpg'
  },
  {
    name: 'Gabriela Karunia Mangiri',
    position: 'Bendahara',
    department: 'Departemen XYZ',
    image: 'url_bendahara.jpg'
  },
  // Tambahkan anggota lainnya di sini
];

const coordinators = [
  {
    name: 'Wa Ode Firan Salwa Suri',
    position: 'Koordinator Divisi Humas',
    department: 'Divisi Humas',
    image: 'https://www.clipartmax.com/png/middle/269-2690928_skull-logo-design-gambar-gambar-terbaru-yang-keren.png',
    members: [
      { name: 'Andi Safira Julia Mentari', department: 'Divisi Humas', image: 'https://img.lovepik.com/element/40172/3117.png_860.png' },
      { name: 'Jessica Datu Kimin', department: 'Divisi Humas', image: 'https://png.pngtree.com/png-clipart/20200224/original/pngtree-assassin-mascot-logo-design-png-image_5221427.jpg' },
      { name: 'Siti Nurhalizah Takdir', department: 'Divisi Humas', image: 'https://e7.pngegg.com/pngimages/722/363/png-clipart-cartoon-locomotive-music-cool-locomotive.png' },
      { name: 'Masyita Ramdhanti Huda', department: 'Divisi Humas', image: 'https://img.lovepik.com/element/40172/3117.png_860.png' },
      { name: 'Muhammad Syahir', department: 'Divisi Humas', image: 'https://img.lovepik.com/element/40172/3117.png_860.png' },
      { name: 'Farah Nabila', department: 'Divisi Humas', image: 'https://img.lovepik.com/element/40172/3117.png_860.png' },
      { name: 'Terecya Harlita Baoli', department: 'Divisi Humas', image: 'https://img.lovepik.com/element/40172/3117.png_860.png' },
      { name: 'Aulia Isnaeni', department: 'Divisi Humas', image: 'https://img.lovepik.com/element/40172/3117.png_860.png' },
      { name: 'A. Sutasya Dwi Asyura', department: 'Divisi Humas', image: 'https://img.lovepik.com/element/40172/3117.png_860.png' },
      { name: 'A. Sutasya Dwi Asyura', department: 'Divisi Humas', image: 'https://img.lovepik.com/element/40172/3117.png_860.png' },
      // Tambahkan anggota lainnya di sini
    ]
  },
  {
    name: 'Corvi Dipda Sumarauw',
    position: 'Koordinator Divisi Pengembangan',
    department: 'Divisi Pengembangan',
    image: 'url_koordinator_pengembangan.jpg',
    members: [
      { name: 'Jayanto Tjandra Halim', department: 'Divisi Pengembangan', image: 'url_anggota10.jpg' },
      { name: 'Aisyah Wulandari', department: 'Divisi Pengembangan', image: 'url_anggota11.jpg' },
      { name: 'Ainun Amini', department: 'Divisi Pengembangan', image: 'url_anggota12.jpg' },
      { name: 'Krisna dwi kayana', department: 'Divisi Pengembangan', image: 'url_anggota13.jpg' },
      { name: 'Nurul Istiqhoma', department: 'Divisi Pengembangan', image: 'url_anggota14.jpg' },
      { name: 'Syifa Puspita Sari Putri A', department: 'Divisi Pengembangan', image: 'url_anggota15.jpg' },
      { name: 'Andi Harfiah', department: 'Divisi Pengembangan', image: 'url_anggota16.jpg' },
      { name: 'Natachya Aurelia Almer L', department: 'Divisi Pengembangan', image: 'url_anggota17.jpg' },
      // Tambahkan anggota lainnya di sini
    ]
  },
  {
    name: 'Rosman Riak Lukman',
    position: 'Koordinator Divisi Perlengkapan',
    department: 'Divisi Perlengkapan',
    image: 'url_koordinator_perlengkapan.jpg',
    members: [
      { name: 'Muhammad Qalbi', department: 'Divisi Perlengkapan', image: 'url_anggota18.jpg' },
      { name: 'Andi Ahmad Aqram', department: 'Divisi Perlengkapan', image: 'url_anggota19.jpg' },
      { name: 'Muhammad Yusran', department: 'Divisi Perlengkapan', image: 'url_anggota20.jpg' },
      { name: 'Muhaimin H.R', department: 'Divisi Perlengkapan', image: 'url_anggota21.jpg' },
      { name: 'Herlin Endcy', department: 'Divisi Perlengkapan', image: 'url_anggota22.jpg' },
      { name: 'Muhammad Brilyan', department: 'Divisi Perlengkapan', image: 'url_anggota23.jpg' },
      { name: 'Ahmad Altamis Afham', department: 'Divisi Perlengkapan', image: 'url_anggota24.jpg' },
      { name: 'Muhammad Amirul Haq', department: 'Divisi Perlengkapan', image: 'url_anggota25.jpg' },
      // Tambahkan anggota lainnya di sini
    ]
  },
  {
    name: 'Muh. Yusril Arya',
    position: 'Koordinator Divisi Dokumentasi & Sosial Media',
    department: 'Divisi Dokumentasi & Sosial Media',
    image: 'https://iili.io/HtEsbTu.png',
    members: [
      { name: 'Muh. Yasril Aldilah Sudarmono', department: 'Divisi Dokumentasi & Sosial Media', image: 'https://iili.io/HtELJ4V.png' },
      { name: 'Muhammad Naufal Hakim', department: 'Divisi Dokumentasi & Sosial Media', image: 'https://iili.io/HtELHEQ.png' },
      { name: 'Aisyah Aliyah Rahmah B.Mage', department: 'Divisi Dokumentasi & Sosial Media', image: 'https://iili.io/HtEsPEl.png' },
      { name: 'Kenzy Noel Tristan Sarodjie', department: 'Divisi Dokumentasi & Sosial Media', image: 'https://iili.io/HtEL9Cx.png' },
      { name: 'Adella Bellatrix Zephaniah Ganap', department: 'Divisi Dokumentasi & Sosial Media', image: 'https://iili.io/HtEs6B4.png' },
      { name: 'Ahmad Jalu Fahreza Nur Hakim', department: 'Divisi Dokumentasi & Sosial Media', image: 'https://iili.io/HtEsmhb.png' },
      { name: 'Yosheline Gayatri Dwimutiara Appa', department: 'Divisi Dokumentasi & Sosial Media', image: 'https://iili.io/HtEsi42.png' },
      { name: 'Naifah Putri', department: 'Divisi Dokumentasi & Sosial Media', image: 'https://iili.io/HtEspQj.png' },
      { name: 'Andi Mohammad Al Fariz Irsam Pawae', department: 'Divisi Dokumentasi & Sosial Media', image: 'https://iili.io/HtEsL2S.png' },
      // Tambahkan anggota lainnya di sini
    ]
  },
  // Tambahkan koordinator lainnya di sini
];



function About() {
  return (
    <div>
      <NavbarComp />
      <Container className="about-container">
        <h1 className="judul-about">Tentang Kami</h1>
        <Row className="members-row">
          {members.map((member, index) => (
            <Col key={index} xs={6} md={3} className="member-col">
              <div className="member-circle">
                <Image src={member.image} roundedCircle className="member-image" />
              </div>
              <p className="member-name">{member.name}</p>
              <p className="member-position">{member.position}</p>
              <p className="member-department">{member.department}</p>
            </Col>
          ))}
        </Row>
        <h2 className="judul-about">Koordinator</h2>
        <Row className="coordinators-row">
          {coordinators.map((coordinator, index) => (
            <Col key={index} xs={12} md={6} className="coordinator-col">
              <div className="coordinator-circle">
                <Image src={coordinator.image} roundedCircle className="coordinator-image " />
              </div>
              <p className="coordinator-name">{coordinator.name}</p>
              <p className="coordinator-position">{coordinator.position}</p>
              <p className="coordinator-department">{coordinator.department}</p>
              <div>
              <Carousel>
                {coordinator.members.map((member, index) => (
                  <Carousel.Item key={index}>
                    <div className="member-circle">
                      <Image src={member.image} roundedCircle className="member-image" />
                      </div>
                      <p className="member-name">{member.name}</p>
                      <p className="member-department">{member.department}</p>
                    
                  </Carousel.Item>
                ))}
              </Carousel>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default About;
