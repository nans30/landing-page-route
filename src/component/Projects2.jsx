import React from "react";
import Layout from "./layout/Layout";
import "../App.css";
const projectData = [
  {
    title: "Sample Project",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "/image 30.png",
  },
  {
    title: "Sample Project 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "/image 32.png",
  },
  {
    title: "Sample Project 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "/image 33.png",
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
