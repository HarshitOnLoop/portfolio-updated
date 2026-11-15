import {
  FaCode,
  FaCubes,
  FaDatabase,
  FaDesktop,
  FaBrain,
  FaLightbulb,
  FaNetworkWired,
  FaRobot,
  FaSearch,
  FaServer,
  FaSitemap,
} from "react-icons/fa";
import { DiJava, DiVisualstudio } from "react-icons/di";
import {
  SiClaude,
  SiClaudecode,
  SiCplusplus,
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiGithubcopilot,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiRender,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import "./skills.css";

const skillIcons = {
  Java: DiJava,
  "C++": SiCplusplus,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "React.js": SiReact,
  HTML5: SiHtml5,
  CSS3: SiCss,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "REST APIs": FaServer,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  SQL: FaDatabase,
  "Data Structures": FaSitemap,
  Algorithms: FaCode,
  "Object-Oriented Programming (OOP)": FaCubes,
  DBMS: FaDatabase,
  "Operating Systems": FaDesktop,
  "Computer Networks": FaNetworkWired,
  "On-Page SEO": FaSearch,
  "Off-Page SEO": FaSearch,
  "Keyword Research": FaSearch,
  "Link Building Backlinks": FaSearch,
  ChatGPT: FaBrain,
  "GitHub Copilot": SiGithubcopilot,
  Gemini: SiGooglegemini,
  "Claude Code": SiClaudecode,
  "Prompt Engineering": FaLightbulb,
  "AI-assisted Development": FaRobot,
  Git: SiGit,
  GitHub: SiGithub,
  "VS Code": DiVisualstudio,
  Postman: SiPostman,
  Vercel: SiVercel,
  Netlify: SiNetlify,
  Render: SiRender,
  Claude: SiClaude,
};

const skillIconColors = {
  Java: "#ED8B00",
  "C++": "#00599C",
  JavaScript: "#D4A800",
  TypeScript: "#3178C6",
  "React.js": "#149ECA",
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  "Tailwind CSS": "#06B6D4",
  "Node.js": "#5FA04E",
  "Express.js": "#606060",
  "REST APIs": "#7C3AED",
  MongoDB: "#47A248",
  MySQL: "#4479A1",
  SQL: "#4479A1",
  "Data Structures": "#8B5CF6",
  Algorithms: "#EC4899",
  "Object-Oriented Programming (OOP)": "#0EA5E9",
  DBMS: "#F97316",
  "Operating Systems": "#14B8A6",
  "Computer Networks": "#6366F1",
  "On-Page SEO": "#22C55E",
  "Off-Page SEO": "#F59E0B",
  "Keyword Research": "#D946EF",
  "Link Building Backlinks": "#E11D48",
  ChatGPT: "#10A37F",
  "GitHub Copilot": "#7D4CDB",
  Gemini: "#4285F4",
  "Claude Code": "#D97757",
  "Prompt Engineering": "#F59E0B",
  "AI-assisted Development": "#22C55E",
  Git: "#F05032",
  GitHub: "#6E7781",
  "VS Code": "#007ACC",
  Postman: "#FF6C37",
  Vercel: "#6E7781",
  Netlify: "#00C7B7",
  Render: "#46E3B7",
  Claude: "#D97757",
};

const skillGroups = [
  {
    name: "Programming Languages",
    skills: ["Java", "C++", "JavaScript", "TypeScript"],
  },
  {
    name: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    name: "Databases",
    skills: ["MongoDB", "MySQL", "SQL"],
  },
  {
    name: "Core Computer Science",
    skills: [
      "Data Structures",
      "Algorithms",
      "Object-Oriented Programming (OOP)",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    name: "SEO",
    skills: [
      "On-Page SEO",
      "Off-Page SEO",
      "Keyword Research",
      "Link Building Backlinks",
    ],
  },
  {
    name: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    name: "Cloud/Deployment",
    skills: ["Vercel", "Netlify", "Render"],
  },
  {
    name: "AI",
    skills: [
      "Claude",
      "Claude Code",
      "ChatGPT",
      "GitHub Copilot",
      "Gemini",
      "Prompt Engineering",
      "AI-assisted Development",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="dot-band" aria-hidden="true" />
      <div className="divider" aria-hidden="true" />

      <h2 className="section-title" id="skills-title">
        Skills
      </h2>

      <div className="divider" aria-hidden="true" />

      <div className="skills-content">
        <p className="skills-intro">
          A selection of my technical skills, tools, and areas of focus.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <section className="skills-group" key={group.name}>
              <h3>{group.name}</h3>
              <ul>
                {group.skills.map((skill) => {
                  const Icon = skillIcons[skill] ?? FaCode;

                  return (
                    <li key={skill}>
                      <Icon
                        className="skills-icon"
                        style={{ color: skillIconColors[skill] }}
                        aria-hidden="true"
                      />
                      <span>{skill}</span>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <div className="divider" aria-hidden="true" />
    </section>
  );
}
