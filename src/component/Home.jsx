import React from "react";
import Layout from "./layout/Layout";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import "../App.css";

const Home = () => {
  return (
    <Layout>
      <div className="home-container">
        <div className="left-content">
          <h3 className="subtitle">PROJECT</h3>
          <h1 className="title">Lorum</h1>

          <div className="navigation-buttons">
            <button>←</button>
            <button>→</button>
          </div>
        </div>

        <div className="page-indicator">
          <img src="../tgl.png" alt="Page Indicator" />
        </div>

        <div className="right-image">
          <img src="../G1.png" alt="Project" />
          <div className="view-project-overlay">VIEW PROJECT →</div>
        </div>
      </div>

      <div className="home-container"></div>
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default Home;
