import React from "react";
import "../App.css"; // Mengimpor file CSS

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
