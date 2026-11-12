import "./experience.css";

export default function Experience() {
  const experienceData = [
    {
      company: "Company Name",
      position: "Position Title",
      duration: "Duration",
      description: "Description of the experience.",
      location: "Location"
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

        <div className="left">
                {experienceData.map((exp)=>(
                    <>
                        <h3>{exp.company}</h3>
                        <p>{exp.position}</p>
                        </>
                ))}
        </div>

        <div className="right">
            {
                experienceData.map((exp)=>(
                    <>
                    <p>{exp.duration}</p>
                    <p>{exp.location}</p>
                    </>
                ))
            }
        </div>

        </div>


      </section>

    </>
  );
}
