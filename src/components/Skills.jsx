import React from "react";

const SKILLS = [
  "Problem Solving","Python","React", "JavaScript (ES6+)", "HTML", "CSS", "Sass", "Git",
   "Vite", "Webpack","cloud deployment","Data Analysis","Data Structures"
  ,"Machine Learning", "React", "Node.js","PHP",
"Express", "MongoDB", "MySQL",  "GitHub",
"Laravel", "API REST", "TailwindCSS"
];

export default function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {SKILLS.map((s) => (
          <span key={s} className="skill-badge">{s}</span>
        ))}
      </div>
    </section>
  );
}