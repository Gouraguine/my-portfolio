import React from "react";
import "../index.css";
import { FaEnvelope, FaLinkedin } from "react-icons/fa"; // Import icons from react-icons

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-title" style={{ fontSize: "35px", marginBottom: "20px" }}>
        📬 Get in Touch
      </h2>
      <p style={{ textAlign: "center", marginBottom: "20px", color: "#cfeeff", fontSize: "1.1rem" }}>
        I would love to hear from you! Whether you have a question, feedback, or just want to connect, feel free to reach out through the links below.
      </p>
      <div className="contact-icons" style={{ display: "flex", justifyContent: "center", gap: "30px", fontSize: "24px" }}>
        <a href="mailto: gouraguinesalim@example.com" className="contact-icon" aria-label="Email">
        </a>
        <a href="https://www.linkedin.com/in/salim-gouraguine-716266261/" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="LinkedIn">
          <FaLinkedin size={24} />
        </a>
      </div>
      <p style={{ textAlign: "center", marginTop: "10px", color: "#cfeeff" }}>
        Email: <a href="mailto:gouraguinesalim@example.com" style={{ color: "#00aaff" }}>gouraguinesalim@example.com</a>
      </p>
    </section>
  );
};

export default Contact;
