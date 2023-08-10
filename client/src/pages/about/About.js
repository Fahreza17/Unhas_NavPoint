import React from 'react';
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';
import NavbarComp from '../../components/NavbarComp';
import Footer from '../../components/Footer';
import '../../components/fonts/font.css'
import './About.css';

const members = [
  {
    name: 'Muhammad Addeta Rukmadi',
    position: 'Ketua KKN',
    department: 'Teknik Informatika',
    image: 'https://iili.io/HtV3Jpa.md.png'
  },
  {
    name: 'Zhafirah Alda Nizaroh',
    position: 'Sekretaris',
    department: 'Ilmu Komunikasi',
    image: 'https://iili.io/HtV33hv.md.png'
  },
  {
    name: 'Gabriela Karunia Mangiri',
    position: 'Bendahara',
    department: 'Ilmu Hubungan Internasional',
    image: 'https://iili.io/HtV32TJ.md.png'
  },
  // Tambahkan anggota lainnya di sini
];

const coordinators = [
  {
    name: 'Wa Ode Firan Salwa Suri',
    position: 'Koordinator Divisi Humas',
    department: 'Ilmu Hubungan Internasional',
    image: 'https://iili.io/HtV5Udu.md.png',
    members: [
      { name: 'Andi Safira Julia Mentari', department: 'Agribisnis', image: 'https://iili.io/HtV5NX2.th.png' },
      { name: 'Jessica Datu Kimin', department: 'Ilmu Hubungan Internasional', image: 'https://iili.io/HtV5iXV.th.png' },
      { name: 'Siti Nurhalizah Takdir', department: 'Ilmu Hubungan Internasional', image: 'https://iili.io/HtV5kq7.th.png' },
      { name: 'Masyita Ramdhanti Huda', department: 'Ilmu Hubungan Internasional', image: 'https://iili.io/HtV5sLB.th.png' },
      { name: 'Muhammad Syahir', department: 'Administrasi Publik', image: 'https://iili.io/HtV5v19.th.png' },
      { name: 'Farah Nabila', department: 'Ilmu Komunikasi', image: 'https://iili.io/HtV5PzQ.th.png' },
      { name: 'Terecya Harlita Baoli', department: 'Ilmu Hubungan Internasional', image: 'https://iili.io/HtV5rej.th.png' },
      { name: 'Aulia Isnaeni', department: 'Teknik Perkapalan', image: 'https://iili.io/HtV5g5b.th.png' },
      { name: 'A. Sutasya Dwi Asyura', department: 'Sosiologi', image: 'https://iili.io/HtV5OsS.th.png' },
      // Tambahkan anggota lainnya di sini
    ]
  },
  {
    name: 'Corvi Dipda Sumarauw',
    position: 'Koordinator Divisi Pengembangan',
    department: 'Sastra Jepang',
    image: 'https://iili.io/HtVcavn.md.png',
    members: [
      { name: 'Jayanto Tjandra Halim', department: 'Akuntansi', image: 'https://iili.io/HtVc0TG.th.png' },
      { name: 'Aisyah Wulandari', department: 'Kimia', image: 'https://iili.io/HtVc1jf.th.png' },
      { name: 'Ainun Amini', department: 'Biologi', image: 'https://iili.io/HtVceTb.th.png' },
      { name: 'Krisna dwi kayana', department: 'Statistika', image: 'https://iili.io/HtVcW4S.th.png' },
      { name: 'Nurul Istiqhoma', department: 'Sastra Inggris', image: 'https://iili.io/HtVcja9.th.png' },
      { name: 'Syifa Puspita Sari Putri A', department: 'Sastra Inggris', image: 'https://iili.io/HtVcNyu.th.png' },
      { name: 'Andi Harfiah', department: 'Manajemen', image: 'https://iili.io/HtVccps.th.png' },
      { name: 'Natachya Aurelia Almer L', department: 'Farmasi', image: 'https://iili.io/HtVch37.th.png' },
      // Tambahkan anggota lainnya di sini
    ]
  },
  {
    name: 'Rosman Riak Lukman',
    position: 'Koordinator Divisi Perlengkapan',
    department: 'Teknik Elektro',
    image: 'https://iili.io/HtVEifR.md.png',
    members: [
      { name: 'Muhammad Qalbi', department: 'Kimia', image: 'https://iili.io/HtVErxa.th.png' },
      { name: 'Andi Ahmad Aqram', department: 'Teknik Arsitektur', image: 'https://iili.io/HtVEOlV.th.png' },
      { name: 'Muhammad Yusran', department: 'Ilmu Komunikasi', image: 'https://iili.io/HtVESOF.th.png' },
      { name: 'Muhaimin H.R', department: 'Sastra Jepang', image: 'https://iili.io/HDJkYKl.jpg' },
      { name: 'Herlin Endcy', department: 'Peternakan', image: 'https://iili.io/HtVEvHP.th.png' },
      { name: 'Muhammad Brilyan', department: 'Manajemen', image: 'https://iili.io/HtVEeUB.th.png' },
      { name: 'Ahmad Altamis Afham', department: 'Teknik Arsitektur', image: 'https://iili.io/HtVEUDg.th.png' },
      { name: 'Muhammad Amirul Haq', department: 'Sistem Informasi', image: 'https://iili.io/HtVE6iv.th.png' },
      // Tambahkan anggota lainnya di sini
    ]
  },
  {
    name: 'Muh. Yusril Arya',
    position: 'Koordinator Divisi PUBDOK',
    department: 'Sastra Inggris',
    image: 'https://iili.io/HtEsbTu.md.png',
    members: [
      { name: 'Andi Mohammad Al Fariz Irsam Pawae', department: 'Teknik Perencanaan Wilayah dan Kota', image: 'https://iili.io/HtEsL2S.th.png' },
      { name: 'Muh. Yasril Aldilah Sudarmono', department: 'Sastra Indonesia', image: 'https://iili.io/HtELJ4V.th.png' },
      { name: 'Muhammad Naufal Hakim', department: 'Ilmu Hubungan Internasional', image: 'https://iili.io/HtELHEQ.th.png' },
      { name: 'Aisyah Aliyah Rahmah B.Mage', department: 'Agribisnis', image: 'https://iili.io/HtEsPEl.th.png' },
      { name: 'Kenzy Noel Tristan Sarodjie', department: 'Akuntansi', image: 'https://iili.io/HtEL9Cx.th.png' },
      { name: 'Adella Bellatrix Zephaniah Ganap', department: 'Statistika', image: 'https://iili.io/HtEs6B4.th.png' },
      { name: 'Ahmad Jalu Fahreza Nur Hakim', department: 'Sistem Informasi', image: 'https://iili.io/HtylPqv.gif' },
      { name: 'Yosheline Gayatri Dwimutiara Appa', department: 'Biologi', image: 'https://iili.io/HtEsi42.th.png' },
      { name: 'Naifah Putri', department: 'Statistika', image: 'https://iili.io/HtEspQj.th.png' },
      // Tambahkan anggota lainnya di sini
    ]
  },
  // Tambahkan koordinator lainnya di sini
];



function About() {
  const targetMemberName = "Ahmad Jalu Fahreza Nur Hakim";
  return (
    <div>
      <NavbarComp />
      <Container className="about-container">
        <h1 className="judul-about">ABOUT US</h1>
        <Row className="members-row">
          {members.map((member, index) => {
            if (index === 0) {
              // Menampilkan 1 item di atas
              return (
                <Col key={index} xs={12} md={12} lg={12} className="member-col">
                  <p className="member-position">{member.position}</p>
                  <div className="inti-circle">
                    <Image src={member.image} className="inti-image" />
                  </div>
                  <p className="member-name">{member.name}</p>
                  <p className="member-department">{member.department}</p>
                  <hr></hr>
                </Col>
              );
            } else if (index === 1 || index === 2) {
              // Menampilkan 2 item di bawah
              return (
                <Col key={index} xs={12} md={6} lg={4} className="member-col">
                  <p className="member-position">{member.position}</p>
                  <div className="inti-circle">
                    <Image src={member.image} className="inti-image" />
                  </div>
                  <p className="member-name">{member.name}</p>
                  <p className="member-department">{member.department}</p>
                  <hr></hr>
                </Col>
              );
            }
            return null; // Item setelah index 2 diabaikan
          })}
        </Row>
        <h2 className="judul-about">KOORDINATOR</h2>
        <Row className="coordinators-row">
          {coordinators.map((coordinator, index) => (
            <Col key={index} xs={12} md={6} className="coordinator-col">
              <p className="coordinator-position">{coordinator.position}</p>
              <div className="coordinator-circle">
                <Image src={coordinator.image} roundedCircle className="coordinator-image " />
              </div>
              <p className="coordinator-name">{coordinator.name}</p>
              <p className="coordinator-department">{coordinator.department}</p>
              <hr></hr>
              <div>
                <p className="member-name">ANGGOTA</p>
                <Carousel indicators={false}>
                  {coordinator.members.map((member, index) => (
                    <Carousel.Item key={index}>
                      <div className={`member-circle ${member.name === targetMemberName ? 'target-member' : ''}`}>
                      <Image src={member.image} className={`member-image ${member.name === targetMemberName ? 'target-member-image' : ''}`} />
                      </div>
                      <p className={`member-name ${member.name === targetMemberName ? 'target-member-name' : ''}`}>
                        {member.name}
                      </p>
                      <p className="member-department">{member.department}</p>
                      <hr></hr>
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
