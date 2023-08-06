import React, { useState, useEffect } from 'react';
import NavbarComp from '../../components/NavbarComp';
import SearchBar from '../../components/SearchBar';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Cards.css';

const Cards = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFakultasItems, setFilteredFakultasItems] = useState([]);

  useEffect(() => {
    fetch('/api/data') // Ganti dengan URL endpoint yang sesuai
      .then((response) => response.json())
      .then((jsonData) => {
        const fakultasData = jsonData.find((item) => item.type === 'table' && item.name === 'fakultas');
        const fakultasItems = fakultasData ? fakultasData.data : [];

        const filteredFakultas = fakultasItems.filter(
          (item) => item.nama_fakultas.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setFilteredFakultasItems(filteredFakultas);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [searchQuery]);

  const handleMapsClick = (item) => {
    const { url_maps } = item;
    const mapsLink = `${url_maps}`;
    window.open(mapsLink, '_blank');
  };

  return (
    <div>
      <NavbarComp />
      <div className="cards-container">
        <h1 className="cards-heading">Where are you going?</h1>
        <hr className="separator" />
        <SearchBar
          searchQuery={searchQuery}
          handleSearchChange={(e) => setSearchQuery(e.target.value)}
          placeholderText="Search by Fakultas"
        />
        <Row>
          {filteredFakultasItems.map((item) => (
            <Col key={item.id_fakultas} xl={3} lg={4} md={5} sm={12} className="mb-4">
              <Card>
                <Card.Img variant="top" src={item.gambar_fakultas} />
                <Card.Body>
                  <Card.Title>{item.nama_fakultas}</Card.Title>
                  <Card.Text>
                    {item.deskripsi_fakultas.length > 50
                      ? `${item.deskripsi_fakultas.substring(0, 50)}...`
                      : item.deskripsi_fakultas}
                  </Card.Text>
                  <div className="button-container d-flex justify-content-end">
                    <Link to={`/CardDetails/${item.id_fakultas}`} className="btn-primary">
                      Detail
                    </Link>
                    <Button variant="primary" onClick={() => handleMapsClick(item)}>
                      Maps
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Cards;
