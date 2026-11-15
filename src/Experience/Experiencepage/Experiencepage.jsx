import { Link } from "react-router-dom";
import "./Experiencepage.css";

const experience = {
  company: "Tech Arch Software",
  position: "Frontend Developer Intern",
  duration: "1 year",
  location: "Chandigarh",
};

export default function ExperiencePage() {
  return (
    <main id="experience" className="experience-page">
      <div className="dot-band" aria-hidden="true" />
      <div className="divider" aria-hidden="true" />

      <header className="experience-page-heading">
        <Link
          to="/"
          className="icon-btn experience-page-back"
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
        <p className="experience-page-kicker">WHERE I’VE WORKED</p>
        <h1 className="experience-page-title">
          Learning by building, one experience at a time.
        </h1>
        <p className="experience-page-lead">
          My experience so far includes a year as a frontend developer intern
          at Tech Arch Software in Chandigarh.
        </p>
      </header>

      <div className="divider" aria-hidden="true" />

      <section className="experience-page-entries" aria-label="Career roadmap">
        <ol className="experience-page-roadmap">
          <li className="experience-page-step">
            <span className="experience-page-node" aria-hidden="true" />
            <article className="experience-page-entry">
              <p className="experience-page-number">01 / MILESTONE</p>
              <h2>{experience.position}</h2>
              <p className="experience-page-company">{experience.company}</p>
              <p className="experience-page-description">
                A one-year internship focused on frontend development.
              </p>
              <div className="experience-page-meta">
                <span>{experience.duration}</span>
                <span>{experience.location}</span>
              </div>
              <div className="experience-page-post">
                <p className="experience-page-number">SHARED ON LINKEDIN</p>
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7513621244676734976?collapsed=1"
                  title="LinkedIn post"
                  width="600"
                  height="628"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </article>
          </li>
        </ol>
      </section>

      <div className="divider" aria-hidden="true" />
    </main>
  );
}