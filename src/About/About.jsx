import "./About.css";
import { Link } from "react-router-dom";

const paragraphs = [
"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, ",
"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="dot-band" aria-hidden="true" />
      <div className="divider" aria-hidden="true" />

      <h2 className="section-title">About</h2>
      <div className="divider" aria-hidden="true" />

      <div className="section-body">
        {paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}

        <Link to="/about" className="more-link">
          more about me <span aria-hidden="true">›</span>
        </Link>
      </div>

      <div className="divider" aria-hidden="true" />
    </section>
  );
}