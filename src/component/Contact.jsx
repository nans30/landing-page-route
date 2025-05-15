import React from "react";

import "../App.css"

const Contact = () => {
  return (

      <section className="contact-container">
        <div className="contact-form">
          <h1>Contact Us</h1>
          <form action="#">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required />

            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="interest">Interested In</label>
            <input type="text" id="interest" name="interest" />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">SEND EMAIL</button>
          </form>
        </div>
        <div className="image-container">
          <img src="/image 12.png" alt="Image Placeholder" />
        </div>
      </section>

  );
};

export default Contact;
