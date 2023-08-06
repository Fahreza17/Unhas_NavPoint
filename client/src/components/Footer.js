import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Correctly import the CSS file with relative path

const Footer = () => {
  return (
    <footer className="footerStyle"> {/* Use className instead of style attribute */}
      <div className="socialIconsStyle"> {/* Use className instead of style attribute */}
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="iconStyle" /> {/* Use className instead of style attribute */}
        </a>
        <a href="https://twitter.com/kkntsmartcampus" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="iconStyle" /> {/* Use className instead of style attribute */}
        </a>
        <a href="https://instagram.com/kkntunhas110_smartcampus?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="iconStyle" /> {/* Use className instead of style attribute */}
        </a>
      </div>
      <p className="copyRightStyle">&copy; 2023 KKNT GEL.110. Smart Campus Tamalanrea Makassar.</p> {/* Use className instead of style attribute */}
    </footer>
  );
};

export default Footer;
