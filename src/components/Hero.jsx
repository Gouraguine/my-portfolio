import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-title">
          Hello, I'm <span className="title-nowrap">Salim Gouraguine</span>
        </h1>
        <p className="hero-sub">
          Full-Stack Developer | Intelligent Systems Student | ML & Web Technologies
        </p>
        <div className="hero-cta">
          <Link to="/projects" className="btn primary">
            View Projects
          </Link>
          <Link to="/contact" className="btn ghost">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
