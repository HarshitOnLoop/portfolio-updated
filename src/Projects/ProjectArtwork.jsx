export default function ProjectArtwork({ project, className = "" }) {
  return (
    <div
      className={`project-artwork ${className}`.trim()}
      role="img"
      aria-label={`Graphic preview for ${project.name}`}
    >
      {project.artworkCards.map((label, index) => (
        <div className="project-art-card" key={label}>
          <span className="project-art-pattern" aria-hidden="true" />
          <span className="project-art-label">{label}</span>
          <span className="project-art-index" aria-hidden="true">
            0{index + 1}
          </span>
        </div>
      ))}
    </div>
  );
}
