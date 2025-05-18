import React from "react";
import Layout from "./layout/Layout";
import "../App.css";


const Contact2 = () => {
  return (
    <Layout>
      <div className="contact-container">
        <div className="contact-info">
          <h1>
            <span className="light">Contact</span>
            <br />
            <span className="bold">Information</span>
          </h1>
          <p className="company-name">Company Name</p>
          <p>1234 Sample Street Austin Texas 76401</p>
          <p className="phone">512.333.2222</p>
          <p>sampleemail@gmail.com</p>
          <button className="contact-button">CONTACT US</button>
        </div>

        <div className="contact-map">
          <img src="../image 14.png" alt="Map" className="map-image" />
          
        </div>
      </div>
    </Layout>
  );
};

export default Contact2;
