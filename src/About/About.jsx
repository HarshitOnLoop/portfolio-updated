import "./About.css";
import { Link } from "react-router-dom";

const paragraphs = [
  "I'm Harshit, a frontend developer from Chandigarh who turns design ideas into fast, clean, thoughtful web experiences.",
  "I see code as another kind of art. I build responsive interfaces with React, TypeScript, and Tailwind, sweat the small details, and back it up with Node.js and MongoDB. I'm currently a Frontend Developer Intern at Tech Arch Software, learning and shipping.",
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