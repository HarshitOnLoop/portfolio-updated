import "./About.css";

const paragraphs = [
  "write a short intro about what you do, how long you have been doing it and the kind of products you have worked on.",
  "then say what you care about, how you like to work with a team, and what people can expect when they work with you.",
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

        <a href="#" className="more-link">
          more about me <span aria-hidden="true">›</span>
        </a>
      </div>

      <div className="divider" aria-hidden="true" />
    </section>
  );
}