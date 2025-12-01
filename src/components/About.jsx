import React from "react";
import "../index.css";
import Skills from "./Skills";

export default function About() {
  return (
    <section className="about">
      <div className="about-inner">
        <header className="about-header">
          <h1 className="about-title">🌐 About Me</h1>
          <p className="about-sub">
            I'm a passionate full-stack developer and a Master's student in
            Intelligent Systems Engineering,
            combining software development with AI to build smart, high-quality, and user-centric digital solutions.
          </p>
          <p className="about-sub muted">
            I create modern, fast, and intuitive web applications using technologies like React, Node.js, PHP/Laravel,
            and Python for automation, data processing, and machine learning experiments.
          </p>
        </header>

        {/* Meta cards in a single line */}
        <div className="about-meta-row">
          <div className="meta-card">
            <h4>Current</h4>
            <p>Master's student — Intelligent Systems Engineering</p>
          </div>

          <div className="meta-card">
            <h4>Focus</h4>
            <p>Frontend, AI prototyping, data pipelines</p>
          </div>

          <div className="meta-card">
            <h4>Tools</h4>
            <p>React · Node · Python · PHP/Laravel · Git · Vite</p>
          </div>
        </div>

        {/* Centered content section */}
        <div className="about-content-centered">
          <div className="about-text">
            <h3 className="about-section-heading">🔥 What I Do</h3>
            <ul className="about-list detailed">
              <li>
                <strong>Frontend Development</strong>
                <div className="list-desc">React, modern UI/UX, responsive and clean design</div>
              </li>
              <li>
                <strong>Backend Development</strong>
                <div className="list-desc">Node.js, Express, PHP/Laravel, REST APIs, authentication, system architecture</div>
              </li>
              <li>
                <strong>AI & Intelligent Systems</strong>
                <div className="list-desc">Basics of machine learning, data preprocessing, model training, intelligent workflows</div>
              </li>
              <li>
                <strong>Python Programming</strong>
                <div className="list-desc">Automation scripts, data analysis, ML models, API integration</div>
              </li>
              <li>
                <strong>Database & Deployment</strong>
                <div className="list-desc">MySQL, MongoDB, cloud hosting, scalable and maintainable structures</div>
              </li>
            </ul>

            <h3 className="about-section-heading">🎯 My Mindset</h3>
            <p className="about-paragraph">
              I focus on performance, flexibility, and clean code, always aiming to deliver reliable and professional solutions.
              I continuously explore new technologies, improve my skills, and push my limits to build innovative digital experiences.
            </p>
          </div>
        </div>

        <Skills />
      </div>
    </section>
  );
}