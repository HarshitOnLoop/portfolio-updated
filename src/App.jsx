import { useEffect, useRef, useState } from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "./App.css";
import Header from "./Header";
import About from "./About/About";
import AboutPage from "./About/AboutPage/AboutPage";
import { SmoothCursor } from "./components/velora/smooth-cursor";
import Skills from "./Skills/skills";
import Experience from "./Experience/experience";
import ExperiencePage from "./Experience/Experiencepage/Experiencepage";
import Projects from "./Projects/projects";
import ProjectsPage from "./Projects/ProjectsPage/ProjectsPage";
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
  const location = useLocation();
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
  const [menuOpen, setMenuOpen] = useState(false);

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
  }, [location.pathname]);

  return (
    <header className="navbar">
      <Link
        to={location.pathname === "/" ? "#home" : "/#home"}
        className="nav-logo"
        aria-label="Back to home"
      >
        h.
      </Link>

      <nav
        id="main-nav"
        className={`nav-links${menuOpen ? " is-open" : ""}`}
        aria-label="Main"
      >
        {links.map((link) => {
          const to =
            location.pathname === "/" ? link.href : `/${link.href}`;

          return (
            <Link
              key={link.name}
              to={to}
              className={`nav-link ${active === link.href ? "active" : ""}`}
              onClick={() => {
                setActive(link.href);
                setMenuOpen(false);
              }}
            >
              {link.name}
            </Link>
          );
        })}
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
        <button
          className="icon-btn menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
        >
          <svg {...iconProps}>
            <path
              d={
                menuOpen
                  ? "M6 6l12 12M18 6 6 18"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

/* ---------- App ---------- */
export default function App() {
  const location = useLocation();
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      respectReducedMotion: true,
    });
    lenisRef.current = lenis;

    return () => {
      lenisRef.current = null;
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        lenis.scrollTo(target, { offset: -222 });
        return;
      }
    }

    lenis.scrollTo(0, { immediate: true });
  }, [location.hash, location.pathname]);

  return (
    <div className="frame">
      <SmoothCursor />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Skills />
              <Projects />
              <Experience />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

    
    </div>
  );
}