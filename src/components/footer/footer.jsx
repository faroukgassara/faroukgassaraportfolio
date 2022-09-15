import React from "react";
import './footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Farouk</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer_link">
            Skills
            </a>
          </li>

          <li>
            <a href="#qualification" className="footer_link">
            Qualification
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a href="https://www.linkedin.com/in/farouk-gassara-588035149/" className="footer_social-link" target="_blank">
            <i class="bx bxl-linkedin"></i>
          </a>

          <a href="https://www.instagram.com/faroukgassaraa/?hl=en" className="footer_social-link" target="_blank">
            <i class="bx bxl-instagram"></i>
          </a>

          <a href="https://www.facebook.com/FaroukGassaraa/" className="footer_social-link" target="_blank">
            <i class="bx bxl-facebook"></i>
          </a>
        </div>

        <span className="footer_copy">&#169; Farouk Gassara. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
