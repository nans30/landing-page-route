import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import "../App.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      {/* LOGO */}
      <div className="footer-section logo">
        <h2>DIGITAL PROJECT</h2>
      </div>

      {/* NAV LINKS */}
      <div className="footer-section">
        <h4>Information</h4>
        <ul>
          <li>Main</li>
          <li>Gallery</li>
          <li>Projects</li>
          <li>Certifications</li>
          <li>Contacts</li>
        </ul>
      </div>

      {/* CONTACTS */}
      <div className="footer-section">
        <h4>Contacts</h4>
        <p>
          <FaMapMarkerAlt style={{ marginRight: "8px" }} />
          1234 Sample Street Austin Texas
          <br />
        </p>
        <p>
          <FaPhoneAlt style={{ marginRight: "8px" }} />
          512.333.2222
        </p>
        <p>
          <FaEnvelope style={{ marginRight: "8px" }} />
          sampleemail@gmail.com
        </p>
      </div>

      {/* SOCIAL */}
      <div className="footer-section">
        <h4>Social Media</h4>
        <div className="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaPinterestP />
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} Vancorsten</p>
    </div>
  </footer>
);

export default Footer;
