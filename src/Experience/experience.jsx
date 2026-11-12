import "./experience.css";

export default function Experience() {
  const experienceData = [
    {
      company: "Tech Arch Software",
      position: "Frontend Developer Intern",
      duration: "1 year",
      description: "this is a description of the experience. It can include details about the role, responsibilities, achievements, and any other relevant information that provides insight into the experience.",
      location: "chandigarh"
    },
        {
      company: "Tech Arch Software",
      position: "Frontend Developer Intern",
      duration: "1 year",
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
                <div className="section-left">
                  <p className="section-left-text">{exp.company}</p>
                  <p className="section-left-subtext">{exp.position}</p>
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
        </div>
      </section>
    </>
  );
}
