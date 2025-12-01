import React from "react";
import ProjectCard from "./ProjectCard";
import "../index.css";

const PROJECTS = [
	{
		title: "Project One",
		description: "Web app with React + Node, realtime features and auth.",
		tech: ["React", "Node.js", "MongoDB"],
		href: "https://github.com/yourusername/project-one",
		demo: "#",
		image: "/assets/project1.jpg",
	},
	{
		title: "Project Two",
		description: "API service in PHP/Laravel for data processing.",
		tech: ["PHP", "Laravel", "MySQL"],
		href: "https://github.com/yourusername/project-two",
		demo: "#",
		image: "/assets/project2.jpg",
	},
	{
		title: "Project Three",
		description: "ML prototype: data pipeline + training script in Python.",
		tech: ["Python", "scikit-learn"],
		href: "https://github.com/yourusername/project-three",
		demo: "#",
		image: "/assets/project3.jpg",
	},
];

export default function Projects() {
	return (
		<section className="projects">
			<h2 className="projects-title">📂 My Projects</h2>
			<div className="projects-grid">
				{PROJECTS.map((p) => (
					<ProjectCard
						key={p.title}
						title={p.title}
						description={p.description}
						tech={p.tech}
						href={p.href}
						demo={p.demo}
						image={p.image}
					/>
				))}
			</div>
		</section>
	);
}
