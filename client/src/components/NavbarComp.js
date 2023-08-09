import React, { useState, useEffect } from 'react';
import './Navbar.css';
import './fonts/font.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const NavbarComp = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const handleToggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const getNavLinkStyle = (path) => {
    return location.pathname === path ? { color: 'black' } : null;
  };

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <Navbar data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          {isMobile ? (
            <span className="d-inline-block align-top navbar-toggler">
            </span>
          ) : (
            <img
              src="https://iili.io/HtW8Omb.md.png"
              width="90"
              height="90"
              className="d-inline-block align-top logo-img"
              alt="React Bootstrap logo"
            />
          )}
        </Navbar.Brand>
        {isMobile ? (
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggleOffcanvas} />
        ) : (
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" style={getNavLinkStyle('/')}>Home</Nav.Link>
              <Nav.Link as={Link} to="/Cards" style={getNavLinkStyle('/Cards')}>NavPoint</Nav.Link>
              <Nav.Link as={Link} to="/About" style={getNavLinkStyle('/About')}>About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        )}
        
      </Container>
      <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} placement="end" className= "offcanvas-width">
        <Offcanvas.Header closeButton>
        <img
              src="https://iili.io/HtW8Omb.md.png"
              width="50"
              height="50"
              className="d-inline-block align-top offcanvas-logo"
              alt="React Bootstrap logo"
            />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" style={getNavLinkStyle('/')}>Home</Nav.Link>
            <hr className="offcanvas-hr"></hr>
            <Nav.Link as={Link} to="/Cards" style={getNavLinkStyle('/Cards')}>NavPoint</Nav.Link>
            <hr className="offcanvas-hr"></hr>
            <Nav.Link as={Link} to="/About" style={getNavLinkStyle('/About')}>About</Nav.Link>
            <hr className="offcanvas-hr"></hr>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default NavbarComp;