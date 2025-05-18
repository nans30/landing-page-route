import React from "react";
import Layout from "./layout/Layout";
import "../App.css";

const Gallery = () => {
  return (
    <Layout>
      <div className="gallery-wrapper">
        <div className="gallery-container">
          {/* Header */}
          <div className="gallery-header">
            <h1 className="gallery-title">
              <span className="light">Photo</span>
              <span className="bold">Gallery</span>
            </h1>
          </div>

          {/* Grid Baris Pertama */}
          <div className="gallery-grid">
            <div className="photo-box placeholder" />
            <div className="photo-box">
              <img src="/G1.png" alt="photo1" />
            </div>
            <div className="photo-box">
              <img src="/b5.png" alt="photo2" />
            </div>
            <div className="photo-box">
              <img src="/b6.png" alt="photo3" />
            </div>
            <div className="photo-box">
              <img src="/b7.png" alt="photo4" />
            </div>
          </div>

          {/* Grid Baris Kedua */}
          <div className="gallery-grid">
            <div className="photo-box">
              <img src="/b8.png" alt="photo5" />
            </div>
            <div className="photo-box">
              <img src="/b9.png" alt="photo6" />
            </div>
            <div className="photo-box">
              <img src="/b10.png" alt="photo7" />
            </div>
            <div className="photo-box">
              <img src="/b11.png" alt="photo8" />
            </div>
            <div className="photo-box">
              <img src="/b12.png" alt="photo9" />
            </div>
          </div>

          {/* Pagination */}
          <div className="pagination">
            
            <div className="navigation-buttons2">
              <button>←</button>
              <button>→</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
