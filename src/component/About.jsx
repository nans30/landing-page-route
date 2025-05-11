import React from "react";
import "../App.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-wrapper">
        {/* Left Side - Images */}
        <div className="about-images">
          <div className="small-images">
            <img src="../b1.png" alt="Small 1" className="img-small" />
            <img src="../b3.png" alt="Small 2" className="img-small" />
          </div>
          <div className="img-large-container">
            <img src="../b2.png" alt="Large" className="img-large" />
          </div>
        </div>

        {/* Right Side - About + Focus */}
        <div className="about-text-content">
          <h2 className="about-heading">About</h2>
          <p className="about-paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="read-more-btn">READ MORE →</button>

          <h2 className="focus-heading">Main Focus/Mission Statement</h2>
          <div className="focus-items">
            <div className="focus-box">
              <h1 className="focus-number">1</h1>
              <p className="focus-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur, lectus et facilisis placerat.
              </p>
            </div>
            <div className="focus-box">
              <h1 className="focus-number">2</h1>
              <p className="focus-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur, lectus et facilisis placerat, magna mauris porttitor
                tortor, a auctor est felis ut nisl.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
