import React from "react";
import "../App.css"; // Atau gunakan Projects.css jika terpisah

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Our Projects</h2>

 <div className="projects-grid">
  <div className="project-main">
    <img src="/Rectangle 12.png" alt="Sample Project" />
    <div className="overlay">
      <h3>
        Sample<br />Project
      </h3>
      <p>View More      → </p>
    </div>
  </div>

  <div className="project project-2">
    <img src="/image 15.png" alt="Project 2" />
  </div>

  <div className="projects-row-bottom">
    <div className="project project-3">
      <img src="/image 16.png" alt="Project 3" />
    </div>
    <div className="project project-4">
      <img src="/image 17.png" alt="Project 4" />
    </div>
    <div className="project project-5">
      <img src="/image 18.png" alt="Project 5" />
    </div>
  </div>
</div>


      <div className="projects-button-container">
        <button className="projects-button">ALL PROJECTS →</button>
      </div>
    </section>
  );
};

export default Projects;
