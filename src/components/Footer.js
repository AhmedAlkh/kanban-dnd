import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="links">
        {/* GitHub link in footer  */}
        <a href="https://github.com/AhmedAlkh" target="_blank" rel="noreferrer">
          <FaGithub className="footer-icon" />
        </a>

        {/* LinkdIn link in footer  */}
        <a
          href="https://www.linkedin.com/in/ahmed-alkhatib-96599b220/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="footer-icon" />
        </a>
      </div>
      <div className="copyright">
        <p>© 2023 All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
