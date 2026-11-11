import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import About from "./About/About";

// import About from "./components/About";
// import Skills from "./components/Skills";
// ...import your own section components here

const links = [
  { name: "about", href: "#about" },
  { name: "skills", href: "#skills" },
  { name: "projects", href: "#projects" },
  { name: "experience", href: "#experience" },
  { name: "contact", href: "#contact" },
  { name: "blog", href: "#blog" },
];

/* ---------- Icons ---------- */
const iconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const SunIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

const MoonIcon = () => (
  <svg {...iconProps}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

const SoundOnIcon = () => (
  <svg {...iconProps}>
    <path d="M11 5 6 9H2v6h4l5 4V5z" />
    <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
  </svg>
);

const SoundOffIcon = () => (
  <svg {...iconProps}>
    <path d="M11 5 6 9H2v6h4l5 4V5z" />
    <path d="m22 9-6 6M16 9l6 6" />
  </svg>
);

/* ---------- Navbar ---------- */
function Navbar() {
  const [active, setActive] = useState("");
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
    } catch {}
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });
  const [soundOn, setSoundOn] = useState(false);

  // Apply theme to <html> so CSS variables switch everywhere
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  // Highlight the link of the section currently in view
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="navbar">
      <a href="#" className="nav-logo" aria-label="Back to top">
        h.
      </a>

      <nav className="nav-links" aria-label="Main">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`nav-link ${active === link.href ? "active" : ""}`}
            onClick={() => setActive(link.href)}
          >
            {link.name}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <span className="nav-sep" aria-hidden="true" />
        <button
          className="icon-btn"
          onClick={() => setSoundOn((s) => !s)}
          aria-label={soundOn ? "Turn sound off" : "Turn sound on"}
          aria-pressed={soundOn}
        >
          {soundOn ? <SoundOnIcon /> : <SoundOffIcon />}
        </button>
        <button
          className="icon-btn"
          onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
        >
          {theme === "light" ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </header>
  );
}

/* ---------- App ---------- */
export default function App() {
  return (
    <div className="frame">
      <Navbar />

      <Header />
      <About />

      {/* Add your other imported components here, e.g.
          <Hero />
          <About />
          <Skills /> */}
    </div>
  );
}