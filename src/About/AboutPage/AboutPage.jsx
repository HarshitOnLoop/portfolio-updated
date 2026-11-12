import "./AboutPage.css";
import { Link } from "react-router-dom";

const sections = [
  {
    number: "01",
    title: "What I do",
    text: "I enjoy bringing ideas to life through thoughtful interface design and frontend development. From the first layout to the final details, I aim to make each experience clear, responsive, and easy to use.",
  },
  {
    number: "02",
    title: "How I work",
    text: "I like to understand the problem before reaching for a solution. I value accessible interactions, readable code, and the small visual details that help a product feel cohesive.",
  },
  {
    number: "03",
    title: "Beyond the screen",
    text: "Art, architecture, music, and everyday observations all offer a fresh perspective. I enjoy finding ways to bring that curiosity into the digital experiences I create.",
  },
];

export default function AboutPage() {
  return (
    <main id="about" className="about-page">
      <div className="dot-band" aria-hidden="true" />
      <div className="divider" aria-hidden="true" />

      <header className="about-page-heading">
        <Link to="/" className="icon-btn about-page-back" aria-label="Back to home">
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
        <p className="about-page-kicker">A LITTLE MORE ABOUT ME</p>
        <h1 className="about-page-title">I like making the web feel human.</h1>
        <p className="about-page-lead">
          I’m a frontend developer who enjoys turning ideas into clear,
          thoughtful experiences. I care about the details people notice—and
          the ones that simply make a site feel easy to use.
        </p>
      </header>

      <div className="divider" aria-hidden="true" />

      <div className="about-page-sections">
        {sections.map((section) => (
          <section className="about-page-section" key={section.number}>
            <span className="about-page-number">{section.number} / NOTE</span>
            <div>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </div>
          </section>
        ))}
      </div>

      <div className="divider" aria-hidden="true" />
    </main>
  );
}