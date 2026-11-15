import { Link } from "react-router-dom";
import { projects } from "./projectsData";
import ProjectArtwork from "./ProjectArtwork";
import "./projects.css";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        d="M7 17 17 7M9 7h8v8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="dot-band" aria-hidden="true" />
      <div className="divider" aria-hidden="true" />

      <h2 className="section-title" id="projects-title">
        Projects
      </h2>

      <div className="divider" aria-hidden="true" />

      <div className="projects-content">
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <ProjectArtwork project={project} />
              <div className="project-card-content">
                <header className="project-card-heading">
                  <h3>{project.name}</h3>
                  <p className="project-card-date">{project.date}</p>
                </header>

                <div className="project-card-body">
                  <p className="project-card-summary">{project.summary}</p>
                  <ul
                    className="project-tech-list"
                    aria-label="Technologies used"
                  >
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>

                <footer className="project-card-footer">
                  <a
                    className="project-card-link"
                    href={project.repository}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GithubIcon />
                    <span>Source</span>
                  </a>
                  <a
                    className="project-card-link"
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Live demo</span>
                    <ArrowIcon />
                  </a>
                </footer>
              </div>
            </article>
          ))}
        </div>

        <Link to="/projects" className="projects-more-link">
          View all projects <span aria-hidden="true">›</span>
        </Link>
      </div>

      <div className="divider" aria-hidden="true" />
    </section>
  );
}