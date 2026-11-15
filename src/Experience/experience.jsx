import "./experience.css";
import { Link } from "react-router-dom";
import frontendIcon from "../assets/frontend.png";

export default function Experience() {
  const experienceData = [
    {
      icon: frontendIcon,
      company: "Tech Arch Software",
      position: "Frontend Developer Intern",
      duration: "October 2026 - Present",
      description: "this is a description of the experience. It can include details about the role, responsibilities, achievements, and any other relevant information that provides insight into the experience.",
      location: "chandigarh"
    }
  ];

  return (
    <>
      <section id="experience" className="section">

        <div className="dot-band" aria-hidden="true" />
        <div className="divider" aria-hidden="true" />

        <h2 className="section-title">Experience</h2>

        <div className="divider" aria-hidden="true" />

        <div className="section-content">
          {experienceData.map((exp, index) => (
            <article
              className="experience-item"
              key={`${exp.company}-${index}`}
            >
              <div className="experience-item-header">
                <div className="experience-item-company">
                  <img className="experience-icon" src={exp.icon} alt="" />
                  <div className="section-left">
                                        <p className="section-left-subtext">{exp.position}</p>
                    <p className="section-left-text">{exp.company}</p>
                  </div>
                </div>

                <div className="section-right">
                  <p className="section-right-text">{exp.duration}</p>
                  <p className="section-right-subtext">{exp.location}</p>
                </div>
              </div>

              <div className="section-description">
                <p>{exp.description}</p>
              </div>
            </article>
          ))}
          <Link to="/experience" className="view-more-link">
            View More <span aria-hidden="true">›</span>
          </Link>
        </div>
      </section>
    </>
  );
}
