import React from "react";
import Layout from "./layout/Layout";

const Certifications = () => {
  const imageUrls = [
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e", // pria jas
    "https://images.unsplash.com/photo-1551434678-e076c223a692", // pria jas biru
    "https://images.unsplash.com/photo-1551434678-e076c223a692", // wanita kerja
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde", // wanita jas
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde", // pria corporate
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e", // duplikat atau ganti
    "https://images.unsplash.com/photo-1583394838336-acd977736f90", // tim kantor
    "https://images.unsplash.com/photo-1543269865-cbf427effbad", // kerja di kantor
    "https://images.unsplash.com/photo-1543269865-cbf427effbad", // pria presentasi
  ];

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
            {imageUrls.slice(0, 4).map((src, idx) => (
              <div className="photo-box" key={idx}>
                <img
                  src={`${src}?auto=format&fit=crop&w=600&h=600&q=80`}
                  alt={`photo${idx + 1}`}
                />
              </div>
            ))}
          </div>

          {/* Grid Baris Kedua */}
          <div className="gallery-grid">
            {imageUrls.slice(4, 9).map((src, idx) => (
              <div className="photo-box" key={idx + 4}>
                <img
                  src={`${src}?auto=format&fit=crop&w=600&h=600&q=80`}
                  alt={`photo${idx + 5}`}
                />
              </div>
            ))}
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

export default Certifications;
