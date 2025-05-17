import React from "react";
import "../App.css";

const Contact = () => (
  <section className="contact-container">
    <div className="contact-form">
      <h1 className="contact-heading">Contact Us</h1>

      <form>
        <input placeholder="Name" required />
        <input placeholder="Phone Number*" type="tel" required />
        <input placeholder="E‑mail*" type="email" required />
        <input placeholder="Interested In" />
        <textarea placeholder="Message*" rows="4" required />

        <div className="btn-wrap">
          <button type="submit">SEND EMAIL →</button>
        </div>
      </form>
    </div>

    <div className="image-container">
      <img src="/image 12.png" alt="Contact visual" />
    </div>
  </section>
);

export default Contact;
