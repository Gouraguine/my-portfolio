import React from "react";
import "../index.css";

export default function ProjectCard({ title, description, tech = [], href, demo, image }) {
  return (
    <article className="project-card">
      <div className="project-media">
        <img src={image || "/assets/placeholder.png"} alt={title} className="project-image" />
      </div>

      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <div className="project-tech">
          {tech.map((t) => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>

        <div className="project-links">
          {href && (
            <a className="btn small" href={href} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          )}
          {demo && (
            <a className="btn ghost small" href={demo} target="_blank" rel="noopener noreferrer">
              Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}