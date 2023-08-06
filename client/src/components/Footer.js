import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer >
      <div className="footerStyle">
        <div className="socialIconsStyle">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="iconStyle" />
          </a>
          <a href="https://twitter.com/kkntsmartcampus" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="iconStyle" />
          </a>
          <a href="https://instagram.com/kkntunhas110_smartcampus?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="iconStyle" />
          </a>
        </div>
        <p className="copyRightStyle">&copy; 2023 KKNT GEL.110. Smart Campus Tamalanrea Makassar.</p>
      </div>
    </footer>
  );
};

export default Footer;
