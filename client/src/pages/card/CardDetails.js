import LoadingSpinner from '../../components/LoadingSpinner';
import React, { useState, useEffect } from 'react';
import NavbarComp from '../../components/NavbarComp';
import Footer from '../../components/Footer'
import ImagePopup from '../about/ImagePopup';
import SearchBar from '../../components/SearchBar';
import { useParams } from 'react-router-dom';
import { Card, Button, Col, Row } from 'react-bootstrap';
import './CardDetails.css';

const CardDetails = () => {
  const { fakultasId } = useParams();
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [fakultas, setFakultasData] = useState(null);
  const [gedungData, setGedungData] = useState([]);
  const [ruanganData, setRuanganData] = useState([]);

  const fetchData = async () => {
    try {
      const responseFakultas = await fetch('https://unhas-nav-point-server.vercel.app/api/data'); // Ganti dengan URL endpoint yang sesuai
      const jsonDataFakultas = await responseFakultas.json();
      const fakultasData = jsonDataFakultas.find(item => item.type === 'table' && item.name === 'fakultas');
      const fakultas = fakultasData ? fakultasData.data.find((item) => item.id_fakultas === fakultasId) : null;
      setFakultasData(fakultas);

      const responseGedung = await fetch(`https://unhas-nav-point-server.vercel.app/api/gedung?fakultasId=${fakultasId}`); // Ganti dengan URL endpoint yang sesuai
      const jsonDataGedung = await responseGedung.json();
      setGedungData(jsonDataGedung);

      const responseRuangan = await fetch('https://unhas-nav-point-server.vercel.app/api/data'); // Ganti dengan URL endpoint yang sesuai
      const jsonDataRuangan = await responseRuangan.json();
      const ruanganData = jsonDataRuangan.find(item => item.type === 'table' && item.name === 'ruangan');
      setRuanganData(ruanganData.data);
      setLoading(false);

    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fakultasId]);

  const handleMapsClick = (item) => {
    const { url_maps } = item;
    const mapsLink = `${url_maps}`;
    window.open(mapsLink, '_blank');
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const highlightText = (text) => {
    if (searchQuery.trim() === '') return text;
    const regex = new RegExp(searchQuery, 'gi');
    return text.replace(regex, (match) => `<span class="highlight">${match}</span>`);
  };

  const filteredGedungItems = gedungData.filter((gedung) =>
    gedung.nama_gedung.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ruanganData.some((ruangan) =>
      ruangan.nama_ruangan.toLowerCase().includes(searchQuery.toLowerCase()) &&
      ruangan.id_gedung === gedung.id_gedung
    )
  );

  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  const handleClosePopup = () => {
    setPopupOpen(false);
    setSelectedImageUrl('');
  };

  const handleImageClick = (imageUrl) => {
    if (isMobile && isCardHovered) {
      setSelectedImageUrl(imageUrl);
      setPopupOpen(true);
    }
  };


  return (
    <div>
      <NavbarComp />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
      <div className="cards-container">
        <div className="cards-heading-wrapper">
          <h1 className="cards-heading">
            {fakultas ? `${fakultas.nama_fakultas}` : 'Card Details'}
          </h1>
        </div>
        <hr className="separator" />

        <SearchBar
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
          filteredResults={filteredGedungItems}
          placeholderText="Search by Building or Room Name"
        />

        <Row className="cards-row justify-content-center">
          {filteredGedungItems.map((gedung) => {
            const ruanganByLantai = ruanganData.filter((ruangan) => ruangan.id_gedung === gedung.id_gedung);

            return (
              <Col key={gedung.id_gedung} md={4} sm={4} lg={3} className="mb-4" 
              onMouseEnter={() => setIsCardHovered(true)}
              onMouseLeave={() => setIsCardHovered(false)}>
                <Card className="card-box">
                  <Card.Img variant="top" src={gedung.gambar_gedung} onClick={() => handleImageClick(gedung.gambar_gedung)}/>
                  <Card.Body>
                    <Card.Title>{gedung.nama_gedung}</Card.Title>
                    <Card.Text>
                      <div className="card-text-scroll">
                        <div className="scroll-content">
                          {Array.from(new Set(ruanganByLantai.map((ruangan) => ruangan.lantai_ruangan))).map((lantai) => (
                            <div key={lantai}>
                              <div className="hr-line"></div>
                              <p className="lantai">Lantai {lantai}</p>
                              <ul>
                                {ruanganByLantai
                                  .filter((ruangan) => ruangan.lantai_ruangan === lantai)
                                  .map((ruangan) => (
                                    <li key={ruangan.id_ruangan} dangerouslySetInnerHTML={{ __html: highlightText(ruangan.nama_ruangan) }}></li>
                                  ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card.Text>
                    <div className="button-container">
                      <Button variant="primary" onClick={() => handleMapsClick(gedung)}>
                        Maps
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
      <Footer/>
      <ImagePopup
            isOpen={popupOpen && (!isMobile || isCardHovered)}
            onClose={handleClosePopup}
            imageUrl={selectedImageUrl}
          />
      </>
      )}
    </div>
  );
};

export default CardDetails;
