import { Link } from "react-router-dom";
import { projects } from "../projectsData";
import ProjectArtwork from "../ProjectArtwork";
import "./ProjectsPage.css";

export default function ProjectsPage() {
  return (
    <main id="projects-page" className="projects-page">
      <div className="dot-band" aria-hidden="true" />
      <div className="divider" aria-hidden="true" />

      <header className="projects-page-heading">
        <Link
          to="/"
          className="icon-btn projects-page-back"
          aria-label="Back to home"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </Link>
        <p className="projects-page-kicker">SELECTED WORK</p>
        <h1 className="projects-page-title">Projects built with purpose.</h1>
        <p className="projects-page-lead">
          A closer look at the applications and interfaces I’ve worked on.
        </p>
      </header>

      <div className="divider" aria-hidden="true" />

      <div className="projects-page-list">
        {projects.map((project, index) => (
          <article className="projects-page-item" key={project.name}>
            <div className="projects-page-item-heading">
              <span className="projects-page-number">
                {String(index + 1).padStart(2, "0")} / PROJECT
              </span>
              <time>{project.date}</time>
            </div>

            <h2>{project.name}</h2>
            <ProjectArtwork
              project={project}
              className="projects-page-artwork"
            />

            <ul
              className="project-tech-list"
              aria-label="Technologies used"
            >
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>

            <ul className="projects-page-details">
              {project.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>

            <div className="projects-page-links">
              <a href={project.demo} target="_blank" rel="noreferrer">
                <strong>Live Demo:</strong> {new URL(project.demo).hostname}
                <span aria-hidden="true"> ↗</span>
              </a>
              <a href={project.repository} target="_blank" rel="noreferrer">
                <strong>GitHub:</strong>{" "}
                {new URL(project.repository).pathname.slice(1)}
                <span aria-hidden="true"> ↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="divider" aria-hidden="true" />
    </main>
  );
}
