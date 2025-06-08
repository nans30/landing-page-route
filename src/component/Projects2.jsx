import React from "react";
import Layout from "./layout/Layout";
import "../App.css";
const projectData = [
  {
    title: "Modern Skyscraper",
    description:
      "A breathtaking view of a modern glass skyscraper reflecting the sunset in the city skyline.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Architectural Design",
    description:
      "A beautifully designed office building showcasing a perfect balance of glass and steel.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Urban Towers",
    description:
      "Towering buildings set against a deep blue sky, a hallmark of urban development.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
  },
];

const Projects2 = () => {
  return (
    <Layout>
      <div className="projects-container">
        <div className="projects-header">
          <div className="light">Our</div>
          <div className="bold">Projects</div>
        </div>

        {projectData.map((project, index) => (
          <div className="project-item" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <button className="view-more">View More →</button>
            </div>
          </div>
        ))}

        <div className="projects-pagination">
          <div className="pagination-buttons">
            <button>{"←"}</button>
            <button>{"→"}</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects2;
